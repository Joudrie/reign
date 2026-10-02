# reign

A swipeable history of each country's rulers, told as one continuous drama.
Working title; the name will change.

## Content

- `data/<country>.json`: one file per country. The schema is in `src/data/schema.ts`.
- `npm run validate`: checks the schema plus impossible dates, overlapping reigns
  not marked as contested, dangling ids and missing hooks. It warns on unchecked drafts.

A **ruler** is a person. A **reign** is one card, stored in swipe order.
Co-monarchs share one reign. A civil war is two overlapping reigns linked by
`contestedWith`. A gap with no monarch is `kind: "interregnum"`.

Rules: write in our own voice, never paraphrased Wikipedia. Use Wikimedia
Commons images only, with credit and license. Nothing is `review.status:
"checked"` until a human has verified every name and date against its sources.
