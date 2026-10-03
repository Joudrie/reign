/**
 * Validates every country file in /data.
 *
 *   npm run validate
 *
 * Fails (exit 1) on schema errors and on facts that can't be right:
 * dangling ids, reigns ending before they start, overlapping reigns that
 * aren't marked as contested, a ruler reigning before birth or after death.
 * Warns on things a human should look at: unchecked drafts, long gaps.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { Country, type HistoricDate, type Reign } from "../src/data/schema.ts";

const dataDir = join(import.meta.dirname, "..", "data");
let errors = 0;
let warnings = 0;

const err = (file: string, msg: string) => {
  errors++;
  console.error(`  ✗ ${file}: ${msg}`);
};
const warn = (file: string, msg: string) => {
  warnings++;
  console.warn(`  ! ${file}: ${msg}`);
};

/** Split "[-]YYYY[-MM[-DD]]"; BC years come back negative (44 BC -> -44). */
const parts = (d: HistoricDate) => {
  const [, sign, y, m, day] = /^(-?)(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(d.date)!;
  return { y: (sign ? -1 : 1) * Number(y), m: m ? Number(m) : undefined, day: day ? Number(day) : undefined };
};

/** Astronomical year: there is no year zero, so 1 BC is 0 and 44 BC is -43. */
const astro = (y: number) => (y < 0 ? y + 1 : y);

/** Sortable number; truncated dates sort to the start of their year/month. */
const key = (d: HistoricDate) => {
  const { y, m = 1, day = 1 } = parts(d);
  return astro(y) * 10000 + m * 100 + day;
};

/** Range check only — Feb 29 is allowed every year because Julian leap rules differ. */
const plausible = (d: HistoricDate) => {
  const { y, m, day } = parts(d);
  if (y === 0) return false;
  if (m !== undefined && (m < 1 || m > 12)) return false;
  if (m !== undefined && day !== undefined) {
    const max = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
    if (day < 1 || day > max) return false;
  }
  return true;
};

/** Latest day a truncated date could mean ("1483" -> 1483-12-30): used for deaths known only to the year. */
const keyEnd = (d: HistoricDate) => {
  const { y, m = 12, day } = parts(d);
  return astro(y) * 10000 + m * 100 + (day ?? (m === 2 ? 28 : 30));
};

/** Proleptic UTC ms (setUTCFullYear, because Date.UTC maps years 0–99 to 1900s). */
const ms = (d: HistoricDate) => {
  const { y, m = 1, day = 1 } = parts(d);
  const t = new Date(0);
  t.setUTCFullYear(astro(y), m - 1, day);
  return t.getTime();
};

const years = (a: HistoricDate, b: HistoricDate) => (ms(b) - ms(a)) / (365.2425 * 864e5);

for (const name of readdirSync(dataDir).filter((f) => f.endsWith(".json"))) {
  console.log(`\n${name}`);
  const parsed = Country.safeParse(JSON.parse(readFileSync(join(dataDir, name), "utf8")));
  if (!parsed.success) {
    for (const i of parsed.error.issues) err(name, `${i.path.join(".")}: ${i.message}`);
    continue;
  }
  const c = parsed.data;

  // Ids are unique per collection; a reign usually shares its ruler's id (it's the URL slug).
  for (const [kind, list] of [["house", c.houses], ["ruler", c.rulers], ["reign", c.reigns]] as const) {
    const seen = new Set<string>();
    for (const { id } of list) {
      if (seen.has(id)) err(name, `duplicate ${kind} id "${id}"`);
      seen.add(id);
    }
  }
  const houses = new Set(c.houses.map((h) => h.id));
  const rulers = new Map(c.rulers.map((r) => [r.id, r]));
  const reigns = new Map(c.reigns.map((r) => [r.id, r]));

  for (const r of c.rulers) {
    if (!houses.has(r.house)) err(r.id, `unknown house "${r.house}"`);
    if (!c.reigns.some((g) => g.rulers.includes(r.id))) warn(r.id, "ruler has no reign");
    for (const d of [r.born, r.died]) if (d && !plausible(d)) err(r.id, `impossible date ${d.date}`);
    if (r.died && r.born && key(r.died) < key(r.born)) err(r.id, "died before born");
  }

  c.reigns.forEach((g: Reign, i) => {
    const where = g.id;
    if (g.kind !== "interregnum" && g.rulers.length === 0) err(where, `kind "${g.kind}" with no rulers`);
    if (g.rulers.length === 0 && !g.house) err(where, "a reign with no rulers needs a house (for its colour)");
    if (g.house && !houses.has(g.house)) err(where, `unknown house "${g.house}"`);
    if ((g.rulers.length !== 1 || g.kind === "interregnum") && !g.title)
      err(where, "co-reigns and interregnums need a title");

    for (const d of [g.start, g.end]) if (d && !plausible(d)) err(where, `impossible date ${d.date}`);
    if (g.end && key(g.end) < key(g.start)) err(where, "ends before it starts");
    if (!g.end && i !== c.reigns.length - 1) err(where, "only the last reign may be open-ended");

    const dead: string[] = [];
    for (const id of g.rulers) {
      const r = rulers.get(id);
      if (!r) {
        err(where, `unknown ruler "${id}"`);
        continue;
      }
      if (r.born && key(g.start) < key(r.born)) err(where, `${r.name} reigns before being born`);
      // An interregnum outlives its leaders (Oliver Cromwell died in 1658; the Commonwealth ran to 1660).
      if (g.kind !== "interregnum" && r.died && g.end && key(g.end) > keyEnd(r.died)) dead.push(r.name);
    }
    // A co-reign runs until the last partner goes (Constantine's sons died one by one).
    if (dead.length && (g.rulers.length === 1 || dead.length === g.rulers.length))
      err(where, `${dead.join(" & ")} reign${dead.length > 1 ? "" : "s"} after dying`);

    for (const id of g.contestedWith) {
      const other = reigns.get(id);
      if (!other) err(where, `contestedWith unknown reign "${id}"`);
      else if (!other.contestedWith.includes(g.id)) err(where, `contestedWith "${id}" is not mutual`);
    }

    const prev = c.reigns[i - 1];
    if (prev) {
      if (key(g.start) < key(prev.start)) err(where, `out of order: starts before "${prev.id}"`);
      // A claimant's card sits beside the reign it challenged; overlap is the point.
      const claim = g.kind === "claimant" || prev.kind === "claimant";
      if (prev.end && key(g.start) < key(prev.end) && !g.contestedWith.includes(prev.id) && !claim)
        err(where, `overlaps "${prev.id}" — mark contestedWith or fix dates`);
      // Gap since the latest end so far (after a contested stretch, that's the longer reign, not the claimant).
      const latest = c.reigns.slice(0, i).reduce((m, r) => (r.end && (!m || key(r.end) > key(m)) ? r.end : m), undefined as HistoricDate | undefined);
      if (latest && years(latest, g.start) > 1) warn(where, `${years(latest, g.start).toFixed(1)}-year gap before this reign`);
    }

    const last = i === c.reigns.length - 1;
    if (!g.hook && !last) err(where, "missing hook");

    for (const img of g.images)
      if (!/public domain|^cc[ -]|^cc0$/i.test(img.license)) warn(where, `check license "${img.license}" on ${img.file}`);

  });

  const drafts = c.reigns.filter((g) => g.review.status === "draft").length;
  if (drafts) warn(name, `${drafts} reign(s) not yet fact-checked (review.status: draft)`);
  console.log(
    `  ${c.reigns.length} reigns · ${c.rulers.length} rulers · ` +
      `${c.reigns.filter((g) => g.review.status === "checked").length} checked`,
  );
  for (const g of c.reigns) {
    const len = g.end ? `${years(g.start, g.end).toFixed(1)} yrs` : "ongoing";
    console.log(`    ${g.start.date.padEnd(10)} → ${(g.end?.date ?? "").padEnd(10)}  ${len.padStart(9)}  ${g.title ?? rulers.get(g.rulers[0])?.name}`);
  }
}

console.log(`\n${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
