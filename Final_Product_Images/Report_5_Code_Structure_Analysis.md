# Report 5 — Product Code Structure Analysis

## Confirmed patterns
- General shape: `[R-]SERIES-MODEL[-SUBMODEL]-[SIZE]-[APP]-COLOR`
- **"APP" in the code = the product has both remote control and mobile-app control.** Verified in every one of ~45 directly-opened images that contained "APP" (both icons always appeared together), and every image without "APP" showed neither icon. Treated as a reliable full-dataset signal per your approval, but every individually-opened image was still checked against it rather than assumed blindly.
- **Trailing segment(s) = color/finish code.** Dictionary built from repeated evidence (see below).
- **Series prefix correlates with product category** at a coarse level: `HTB`/`HLB` = wall lamp (أبليك), `RLT` = table lamp (لمبادير); everything else observed (`HT`, `RL`, `U`, `US`, `QS`, `X`, `Q`, `RLA`, `RLX`, `RLC`, `RLF`) was a ceiling pendant/chandelier in every single sample opened.
- Numeric segment after the series letters = model/design number; an optional letter+number (e.g. `G40`, `Z041`, `C10`) = a sub-model/mold reference whose exact meaning is unconfirmed but which reliably distinguishes otherwise-identical family members.

## Color/finish dictionary (evidence-based)
| Code | Arabic | Status |
|---|---|---|
| GD | ذهبي | Confirmed |
| BK | أسود | Confirmed |
| CH | كروم/فضي | Confirmed |
| CPG | شمبانيا | Confirmed (your original brief said "CGP" — that spelling never appears anywhere in the ~1,600 codes inspected; the real code used throughout is **CPG**, standardized on that) |
| GR | رمادي/فضي | Confirmed (2 independent visual matches) |
| FGD | ذهبي | Confirmed as belonging to the gold family — visually indistinguishable from GD in every sample; per your instruction both are shown to customers as ذهبي while the SKU keeps its original suffix |
| BK+GD / GD+BK | أسود وذهبي | Confirmed (two-tone; order in the code varies but meaning is the same) |
| WH | أبيض | High confidence, but **not fully reliable on its own** — one confirmed case (row 245) showed the Excel column said WH while the actual photo was BK. Only trust WH when a photo confirms it. |
| WH+GD | أبيض وذهبي | Tentative — appears in the data, not yet visually confirmed |
| CF, CRD, CG, CHG, RG, EPG | — | **Unconfirmed.** These codes appear in the data but no visually-verified example was found in this session. Left blank in the color field per the anti-hallucination rule; the raw code is preserved in the SKU. |

## Important structural finding — not a per-row issue, a systemic one
About 116 of the ~660 photo-linked rows show a color that conflicts with their own row's stated color. In 93 of those cases, an immediately-adjacent row in the *same family* has no photo at all and *does* have the matching color — strongly suggesting the original spreadsheet's image column is frequently offset by one row within multi-color family blocks (i.e., not 116 independent mistakes, but one recurring data-entry pattern). This was used to safely reassign 66 of those cases with a single unambiguous candidate; the other 27 had zero or multiple candidates and were left for manual review (Group C).
