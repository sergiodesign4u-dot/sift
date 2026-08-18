# wireframes/ - the grey contract (read this before touching anything here)

1. Grey and immutable. Colour never lands in this folder. It lives in copies under `design/`, which own the visual layer and nothing else. Voice is the last stage that edits text here; after it this folder is frozen.
2. Composition has an origin. Block order comes from `ia/docs/blocks.md` by page type, not from what a typical screen of this kind usually looks like. A block that appears first in a wireframe is an IA defect: fix the node upward, then render it.
3. Structure, text and states belong to this folder. A colour copy that changes any of the three is a defect, not a variant.
4. `_wf.css` is the single source of appearance. Inline CSS on a screen is allowed only as a genuine one-off and only through `var()`. Anything that repeats on two or more screens moves into `_wf.css`.
5. Global chrome and the stage panel are rendered from `_nav.js`, not typed into pages. Voice edits those strings there, so a page that hardcodes them silently drifts from the whole product.
6. `index.html` is the product home screen and `overview.html` is the all-screens hub. Never swap the two.
7. Full contract: `docs/conventions.md`. Screen and state matrix: `docs/screens.md`. Screen registry: `_nav.js`.
