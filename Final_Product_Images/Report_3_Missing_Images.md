# Report 3 — Missing Images (Group B, 615 products)

These products are included in the ERP import (their data is reliable) but have **no verified exact-match image**. Full list is in `Report_GroupB_MissingImages.csv`. Reasons break down as:

| Reason | Approx. count |
|---|---|
| No photo exists anywhere in the source files for this exact variant | ~490 |
| Photo exists but was too low-resolution to read (111–144px) | 26 (rows 66–91) |
| Photo exists but belongs to a sibling color/size variant, and no better photo could be found after searching the full dataset | ~93 (includes the 66 resolved-elsewhere donors + 18 unresolved conflicts + a few others) |
| Photo was a duplicate-paste error (belongs to a different row entirely) | 1 (row 338) |

Every row in this group kept its full product data (SKU, name, color, category, features) — only the image link is missing. Per your instruction, none of these were given a "close enough" placeholder image.
