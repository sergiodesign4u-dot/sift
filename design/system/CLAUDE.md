# design/system: the code of the Sift design system

1. Two levels of tokens, not three: primitive (raw values) and semantic (colour roles).
2. A component reads COLOUR only through a semantic role, never a colour primitive.
3. Geometry (radius, space, size, type) comes straight from the primitive; a literal kept off the scale is declared on its page and in `DESIGN.md`.
4. Two roles = two tokens even at one value today; but one single use is not yet a role.
5. A new component = its css here + its page in `design/kit/` + its `_nav.js` entry with its level + its row in `design/kit/docs/inventory.md` WITH its level + an `@import` in its level group of `index.css`, never at the end.
6. EVERY role and state token has its pair in `[data-theme="light"]`, or it does not exist. A state is a token, never a style, and it never moves the element.

Details: `design/kit/docs/architecture.md`. No em dash in any file here.
