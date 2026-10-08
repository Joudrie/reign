# Release review (2026-10-08)

Four independent reviews were run on the built site: UI and product design, a WCAG 2.1 AA accessibility
audit, functional QA and performance (Playwright, phone/tablet/desktop, light/dark, 4x CPU throttling),
and content QA across all 49 decks. Their full reports were working notes; this file records the outcome.

## Fixed

**Release blockers**
- Touch swipes were cancelled by the browser, and a right swipe near the edge left the app. Cards now
  allow only vertical panning; horizontal overscroll is off.
- Switching to a big deck froze a mid-range phone for 6-8 s (53k DOM nodes). Cards are now built only
  near the reader: the Papacy opens in 0.34 s at 4x CPU with under 1k nodes.
- Quiz "Change decks": region headings were hidden under the chips.
- Every card ended with "Draft: not yet fact-checked". Replaced by one honest line in each card's
  sources and a note in the intro/About.
- 11 Egypt cards had a placeholder "x" image; about 116 newer cards had raw Wikimedia descriptions
  (in nine languages) as captions and alt text. All rewritten.

**Sharing and install**
- Proper page head: description, canonical URL, Open Graph and Twitter card with a 1200x630 preview
  image, crown icon (SVG and PNG), web manifest (installable), offline cache (`sw.js`).
- Every card has a Share button (native share sheet, or copy link with a toast); links open that card.
- `scripts/build-site.py` builds the publishable site from the repo.

**Navigation and first impression**
- Labelled tabs (Compare, Quiz, Read, Fates, Find) with a real timeline icon.
- First-visit intro (what it is, how to swipe/compare/quiz, honesty note), reachable again via Find > About.
- Loading splash instead of a blank page. Back button returns to the card instead of leaving the app.
- Dark mode following the device setting.

**Find**: search box first, searches all 48 countries, folds accents, a year lists everyone on a throne.

**Compare**: any number of countries, sideways scrolling under a pinned year axis, zoom 0.25-32 px/yr
(pinch and ctrl-wheel), keeps your place by year, columns capped at 260px, names stay visible along long
reigns, no clutter of leader lines when zoomed out.

**Quiz**: right/wrong marked on the answer row, card stamped and outlined; no crash when every region is
cleared; Westeros-only "maesters" line.

**Fates/stats**: ~58 violent deaths had been counted as natural; "born c. 425 BC" was read as an age of 425;
year-only dates showed "0 days"; tiny decks topped the danger ranking (now need 8+ recorded deaths).

**Story continuity**: 113 hook/previously lines fixed where cards had been inserted, and card order
fixed in Iran (Seleucid then Parthian runs), Bulgaria, China, Egypt, Iran (Afghan and Zand), Vietnam.

**Accessibility**: focus never drops to the page after an action; live regions for quiz and search;
flags named where they carry meaning; chart has a text breakdown and 3:1 colours; timeline tab stops cut
by half; 44px touch targets; side arrows on any mouse device; Previous button on cards; text-size safe
timeline labels.

`tests/smoke.mjs` covers every deck by deep link, reading and sharing, Compare with all 48 countries at
every zoom, a full quiz round, the intro, stats, search and dark mode.

## Still open (in priority order)

1. **Fact-check.** Every card is still an unchecked draft. This is the biggest risk for a history app.
2. **Portraits not in the image sheets.** About 1,300 newer cards load their portrait from
   upload.wikimedia.org at run time. Works online, but slower, and blank if Wikimedia is blocked.
   Regenerate the sheets for every card that has an image.
3. **Some stand-in images** (rulers with no surviving portrait) show places or relatives; captions say
   so, but a few are weak (a mountain road for Haakon Toresfostre, a modern street in Vidin).
   England's "Louis" card caption ("Seal of Louis VII" on Louis8.jpg) needs a human look.
4. **Data delivery.** The page is 9 MB (2.4 MB gzipped) of inline data. Fetching each deck on demand
   would cut first load several-fold.
5. **Compare with 48 countries** rebuilds the whole grid on each zoom step (1-2 s on a slow phone).
6. **Fonts** come from Google Fonts; self-hosting would remove a third-party request and layout shift.
7. Smaller items: 186 timeline labels truncate in crowded pairs; "Unknown" age appears 562 times;
   mixed quote styles in body text.
