import { z } from "zod";

/**
 * Content model for one country.
 *
 * A *ruler* is a person. A *reign* is one swipeable card: a span of time in
 * which one or more rulers held (or claimed) the crown. Keeping them separate
 * lets us handle:
 *   - one person, two reigns (Henry VI, Edward IV)  -> two reigns, same ruler
 *   - co-monarchs (William III & Mary II)          -> one reign, two rulers
 *   - civil wars (Stephen vs Matilda)              -> two overlapping reigns
 *                                                     linked by `contestedWith`
 *   - no monarch at all (1649–1660)                -> kind: "interregnum"; `rulers`
 *                                                     lists who held power instead
 *
 * `reigns` is stored in story order: swiping right walks the array.
 * The timeline derives its lanes (parallel lines, splits) from overlaps.
 */

const slug = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "must be a lowercase-kebab id");

/**
 * ISO date, possibly truncated to the known precision ("1068", "1100-08", "1100-08-05").
 * BC years are negative and counted as historians count them (no year zero):
 * "-0044-03-15" is 15 March 44 BC.
 */
export const HistoricDate = z.object({
  date: z.string().regex(/^-?\d{4}(-\d{2}(-\d{2})?)?$/, "[-]YYYY, [-]YYYY-MM or [-]YYYY-MM-DD"),
  /** Set when the source itself is approximate ("c. 1028"). */
  circa: z.boolean().optional(),
  /**
   * Dates are recorded as the sources give them. England used the Julian
   * calendar until 1752-09-02, Gregorian from 1752-09-14.
   */
  note: z.string().optional(),
});

export const Image = z.object({
  /** Wikimedia Commons file title, e.g. "File:William II of England.jpg". */
  file: z.string().startsWith("File:"),
  url: z.string().url(),
  page: z.string().url().startsWith("https://commons.wikimedia.org/"),
  credit: z.string().min(1),
  license: z.string().min(1),
  /** When the image was made, so we can say "painted 550 years after he died". */
  made: z.string().min(1),
  caption: z.string().min(1),
  alt: z.string().min(1),
});

export const Claim = z.object({
  text: z.string().min(1),
  /**
   * confirmed — solid, contemporary evidence
   * disputed  — historians genuinely disagree
   * legend    — a good story with little or no early evidence
   */
  status: z.enum(["confirmed", "disputed", "legend"]),
  /** One line on the evidence: who says so and why it's (un)reliable. */
  note: z.string().min(1),
});

export const Source = z.object({
  title: z.string().min(1),
  author: z.string().optional(),
  url: z.string().url().optional(),
  note: z.string().optional(),
});

export const House = z.object({
  id: slug,
  name: z.string().min(1),
  /** Timeline bar color. */
  color: z.string().regex(/^#[0-9a-f]{6}$/i),
  /** Show the name alone, not "House of …": parties, regimes, pretenders. */
  plain: z.boolean().optional(),
});

export const Ruler = z.object({
  id: slug,
  /** Display name including regnal number: "William I". */
  name: z.string().min(1),
  /** "the Conqueror", "Rufus" — what people actually call them. */
  epithet: z.string().optional(),
  house: slug,
  born: HistoricDate,
  died: HistoricDate.optional(), // absent for the living
  causeOfDeath: z.string().optional(),
});

export const Review = z.object({
  /**
   * draft    — written, not yet fact-checked by a human
   * checked  — every name and date verified against `sources`
   */
  status: z.enum(["draft", "checked"]),
  checkedBy: z.string().optional(),
  checkedOn: z.string().optional(),
  notes: z.string().optional(),
});

export const Reign = z.object({
  id: slug,
  /**
   * monarch     — wore the crown
   * claimant    — claimed it, never securely held it
   * leader      — held real power without being the monarch (shoguns, dictators)
   * interregnum — no monarch at all
   */
  kind: z.enum(["monarch", "claimant", "leader", "interregnum"]),
  /** One for a normal reign, two for co-monarchs; for an interregnum, whoever ran things (may be empty). */
  rulers: z.array(slug),
  /** Colour group for a reign with no rulers (a republic): a house id from this file. */
  house: slug.optional(),
  /** Card title; defaults to the ruler's name. Needed for interregnums / co-reigns. */
  title: z.string().optional(),
  /** One short line under the name. */
  tagline: z.string().min(1).max(60),
  start: HistoricDate,
  end: HistoricDate.optional(), // absent for the current monarch
  /** Other reign ids that overlap this one as rival claims (timeline splits). */
  contestedWith: z.array(slug).default([]),
  // Quick stats are trivia-length: they sit in a compact row, so keep them short.
  /** "Son of William I", "Nephew, and he stole it". */
  relationToPredecessor: z.string().min(1).max(40),
  ageAtAccession: z.string().min(1).max(20),
  cameToPower: z.string().min(1).max(40),
  reignEnded: z.string().min(1).max(40),
  /** One-line recap of the previous card. */
  previously: z.string().min(1).max(70),
  /** The story: a couple of short paragraphs, not an encyclopedia entry. */
  paragraphs: z.array(z.string().min(1).max(480)).min(2).max(3),
  claims: z.array(Claim).max(3).default([]),
  /** Cliffhanger into the next card. Omit only on the final card. */
  hook: z.string().max(220).optional(),
  /** The portrait. One image per card for now. */
  images: z.array(Image).length(1),
  sources: z.array(Source).min(2),
  review: Review,
});

export const Country = z.object({
  id: slug,
  name: z.string().min(1),
  /** Short line under the country name in the picker. */
  blurb: z.string().min(1),
  /** What the reign-date convention is, shown in an "about these dates" note. */
  dateConvention: z.string().min(1),
  /** Closing line on the last card when the story has ended (France after 1870). Omit while it continues. */
  epilogue: z.string().max(220).optional(),
  houses: z.array(House).min(1),
  rulers: z.array(Ruler).min(1),
  reigns: z.array(Reign).min(1),
});

export type HistoricDate = z.infer<typeof HistoricDate>;
export type Image = z.infer<typeof Image>;
export type Claim = z.infer<typeof Claim>;
export type Source = z.infer<typeof Source>;
export type House = z.infer<typeof House>;
export type Ruler = z.infer<typeof Ruler>;
export type Reign = z.infer<typeof Reign>;
export type Country = z.infer<typeof Country>;
