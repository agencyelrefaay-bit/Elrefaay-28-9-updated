# Report 2 — Image Audit

## Embedded images inside the inventory Excel
- Total embedded photos: 521 distinct image files, referenced by 554 row-links (some reused across multiple rows)
- Successfully identified/verified: 342 rows matched cleanly via alt-text validation; 75 additionally opened and visually confirmed by hand
- Misattached (image belongs to a sibling row, not its own): 116 rows detected, 66 cleanly resolved by reassigning to the correct sibling; 18 could not be resolved (no clear sibling candidate)
- Completely wrong family/product attached: 62 rows — of these, 28 had leads pointing to a likely source elsewhere in the sheet (not auto-applied, needs human confirmation), 34 could not be traced
- Unreadable due to resolution: 5 images are only 111–144px on their longest side — text is physically not recoverable, even by direct visual inspection
- Corrupted metadata (alt-text is a random UUID, not a code): 26 rows, all within one reused-thumbnail cluster (rows 66–91)
- Blank/no alt-text at all: 551 rows — of these, 30 rows do have a photo (just no text label), and all 30 have now been individually opened and read; the other 521 have no embedded photo at all

## Loose photo folder (صور.zip — 570 images)
- Perceptual-hash compared against all 521 embedded images
- **286 are near-duplicates of an already-processed embedded photo** — no new information, just a second copy (often higher resolution)
- **193 are "family-similar but not identical"** — same product line/rendering style, likely a different color or size variant — not yet individually opened
- **91 have no embedded counterpart at all** — potentially unique photos or entirely new products
  - Of these 91, **9 have been individually opened and read** (see below); **82 remain unopened**

## What the 9 spot-checked "unique" loose photos turned out to be
| Photo shows | Resolution |
|---|---|
| R-HT-149-G33-APP-FGD | Duplicate of an already-matched row (309) |
| R-HT-940-Z009-APP-BK | **Fixed a real error** — row 707's embedded photo wrongly showed a gold/FGD unit; this is the correct black variant |
| R-U513-4-APP-GD | Duplicate of an already-matched row (102) |
| R-HT-819-APP-CPG | **Filled a real gap** — row 243 had no image at all |
| R-7712-900-CH | Possible conflict with row 181 (which shows 700-CH) — held for review, not resolved |
| R-HT-1085-APP-FGD | **Genuinely new** — no matching family anywhere in the inventory (Group D) |
| R-HT-916-G40-APP-BK | Already resolved in the earlier pilot — filled row 663's gap |
| R-HT-853-APP-FGD | Confirmed duplicate of row 522's photo |

This 9-image sample found 1 new product and 2 real corrections out of 9 — suggesting the remaining 82 unopened "unique" photos likely contain more of both. **This is flagged in Report 4 as the highest-value remaining work.**
