# design/system: the code of the Sift design system

1. Two levels of tokens, not three: primitive (raw values) and semantic (colour roles). A component reads colour only through a role; geometry comes straight from the primitive, and an off-scale literal is declared on its page and in `DESIGN.md`.
2. Two roles = two tokens even at one value today; but one single use is not yet a role.
3. New appears HERE first and on a screen second, never the other way round. A screen carries no style of its own. A block on one screen goes to `one-off.css` (no page); a second occurrence makes it a component.
4. A new component = its css here + its page in `design/kit/` + its `_nav.js` entry with its level + its row in `design/kit/docs/inventory.md` WITH its level + an `@import` in its level group of `index.css`, never at the end.
5. A state is a token, never a style in a class, and it never moves the element.
6. A role or state token has a value in BOTH themes (`:root` and `[data-theme="light"]`), or it is a defect.
7. A pattern exists from three grey screens, is built from the components here with no style of its own, lives in `patterns/` and is imported after the components.
Details: `design/kit/docs/architecture.md`, "Contributing to the system". No em dash in any file here.
