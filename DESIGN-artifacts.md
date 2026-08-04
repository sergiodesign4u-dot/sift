# DESIGN-artifacts.md

*Draft design document. The design raw material of Sift, entered here from the approved brand plate at Concept (Stage 06). This is not the product DESIGN.md. The product DESIGN.md is formed at Stage 07 (`/impeccable document`) from the real code of the colored screens plus this file. Root holds the chain: DESIGN-artifacts.md (draft, Stage 06) to DESIGN.md (product, Stage 07).*

*No prior DESIGN.md existed at the repo root, so nothing was renamed or merged in.*

Internal document, English. No em dash anywhere in this file. Every decision below is signed with an attribute from `design/concept/docs/concept.md` (A1 to A5) or the Designer's taste.

---

## Chosen brand: Plate B, "Command center"

`design/concept/assets/brand-plate-b.png` (generated Nano Banana 2, one of three plates; A and C recorded in `concept.md`, still open to return to).

**Scene that fixes it (why dark, not a default):** the skeptical PM at 9pm in a dim room, a focused session where the screen is the only light source, wanting the interface to recede so the signal stands out. Dark is chosen for that scene, not for fashion.

**Kinship:** Linear and Vercel / Geist (Designer's taste). The base language from `references.md`: calm under density, layered neutrals, one restrained accent, weight through hierarchy.

**The through-line it carries:** precise, restrained, typography-first, trustworthy. It is the most product-native of the three plates, and the etalon (2.0 Synthesis view) is exactly this dense dark surface.

---

## Identity

- **Wordmark:** "Sift" set in the UI grotesque at medium weight, tight but not touching (letter-spacing near -0.01em).
- **Emblem / mark:** a single stylized "S" suggesting sifting and flow. **Flat, monochrome** (Porcelain on dark surfaces; the mark may be rendered in the accent only when it stands alone as a small brand token). No gradient on the mark: gradient would break the single-accent discipline (A1) and is a banned decorative move.
- **Lockups:** Primary (mark plus wordmark), Horizontal, Stacked, Wordmark-only, Emblem. All five drawn from the same construction.
- **Signed:** A1 (quiet, one accent), Designer's taste (Linear / Vercel restraint). The plate's cyan-gradient mark is corrected to flat here on purpose.

---

## Palette

Restrained dark. Depth from layered tone and thin borders, not from heavy shadow (A1). One accent only; semantics are functional, not decorative.

| Token | Hex | Role | Signed |
|---|---|---|---|
| Canvas | `#0B0E11` | Page background, deepest surface | A1 quiet; base language (Linear layering) |
| Surface | `#151A1F` | Card and panel background, one step up | A1; A4 ranked rows sit on this |
| Elevated | `#1E252B` | Raised panel, menus, the focused row | A1 |
| Line | `#262D34` | Hairline borders and dividers (separation by tone) | A1 (depth without shadow) |
| Porcelain | `#EAEEF2` | Primary text and the mark | A5 (type does the work) |
| Ash | `#868F99` | Secondary text, metadata, inactive | A1 (secondary recedes) |
| Cyan | `#33C4CC` | The single accent: primary action, active state, and strong confidence | A1 (one accent), A2 (evidence marker), A4 |
| Amber | `#D9A441` | Low-signal only. A quiet tag, never an alarm | A3 (honest about thin, as information) |
| Red | `#E5484D` | Error only. Names a failed state, paired with the next move | A3; Voice Principle 4 (name the next move) |

**Accent discipline (A1):** Cyan is the only saturated color on a working screen, reserved for the one primary next action, the active state, and a strong-confidence signal. Amber and Red appear only on their exact semantic (low-signal, error) and nowhere as decoration. Everything else is neutral. This is the answer to "how much color reaches the screen": almost none.

**Neutral tilt:** the neutrals carry a faint cool cast toward the accent hue, not a warm cast. No warm-neutral band (that is the rejected reflex and the Designer's anti-reference).

---

## Typography

- **UI and body:** a clean humanist grotesque. **Inter** (self-hostable, on Google Fonts, works on GitHub Pages). Weights 400 / 500 / 590 for body, medium, and headings. Signed A5, Designer's taste (Vercel / Geist, Linear).
- **Data and counts:** a monospace for n=X, evidence counts, citation numbers, and timestamps. **IBM Plex Mono**. The count reading in mono is part of the trust surface (the number carries the weight). Signed A2, A4, Voice Principle 1 ("let the number carry the weight").
- **Pairing axis:** grotesque plus mono is a real contrast axis (not two similar sans), per the typography law.
- **Theme statement (A5):** the theme is set in the grotesque at a readable prose size and normal case, as an editorial finding, never uppercase, never a colored label chip, never a marketing headline. Evidence quotes get a quieter, slightly recessed treatment (Ash, smaller). The plainness of the type is how "the customer's words, not the product's" reads in a dark instrument.
- **Open option for Step 5 (recorded, not baked):** a contemporary editorial serif for theme statements only (grafted from Plate A). It would strengthen A5 and add warmth to the dark instrument. Decide it on `directions.html` when composition is chosen; the base here is grotesque plus mono.

---

## Icon language

- **Set:** Solar, Linear weight, inline SVG in the HTML (not a CDN script), one consistent stroke, monochrome.
- **Color:** Porcelain or Ash by default; Cyan only on the active or selected icon. No multicolor, no fill-and-line mixing.
- **Coverage:** source, theme, evidence, citation, confidence, brief, filter, priority, share, plus states.
- **Signed:** A1 (quiet, monochrome), A5 (icons support, type leads).

---

## UI tone

The overall tone of a screen, not a specific layout (layout is chosen at Step 5).

- **Depth by tone, not shadow:** surfaces step Canvas to Surface to Elevated, separated by the Line hairline. Shadows are subtle and contained, never diffuse. (A1)
- **One next action:** the single Cyan primary action per view; secondary actions are ghost (text on transparent). (A1, Voice: one decision at a time)
- **Confidence on the surface:** every theme shows its count inline (n=X in mono) and, when thin, a quiet Amber "low signal" tag right next to it, as information, not an alarm. (A2, A3, D2)
- **Ranked, not dumped:** the working surface is a ranked list, each row a theme plus a volume bar plus n=X; raw material is reached by drilling. (A4)
- **States name the move:** error is Red with the next action stated; empty names the one action that fills it; loading is a silent skeleton or a plain line. No celebration, no alarm. (A3, Voice Principles 3 and 4)
- **Motion:** restrained, ease-out, purposeful; `prefers-reduced-motion` honored. Calm, not loud. (A1, Voice Principle 3)

---

## Concept language (summary)

Sift looks like a calm dark instrument that shows its work. Layered neutral surfaces hold dense feedback without noise; a single cool accent marks the one next action and strong confidence; counts and citations read in mono so the number carries the weight; the low-signal tag is quiet, not loud; the theme is set as the customer's plain finding, not a marketing headline. Every visual decision traces to one of the five attributes, which trace to the personas, the voice, and the benchmark. This is the draft; Stage 07 turns the real colored code plus this file into the product DESIGN.md.

---

## Contrast (WCAG AA, verified)

Key pairs, approximate ratios, all passing AA. The authoritative full table lands in `design/concept/concept.html` at Step 5.

| Foreground | Background | Ratio | Use |
|---|---|---|---|
| Porcelain `#EAEEF2` | Canvas `#0B0E11` | ~16:1 | Primary text |
| Ash `#868F99` | Canvas `#0B0E11` | ~5.5:1 | Secondary text (passes AA normal) |
| Cyan `#33C4CC` | Canvas `#0B0E11` | ~9:1 | Accent text and icons |
| Canvas `#0B0E11` | Cyan `#33C4CC` fill | ~9.5:1 | Text on the primary button |
| Amber `#D9A441` | Canvas `#0B0E11` | ~8.5:1 | Low-signal tag |
| Red `#E5484D` | Canvas `#0B0E11` | ~5:1 | Error text |

Ash is the dimmest tone used for text; nothing darker carries text. Any new text-on-background pair introduced later is measured before it ships.

---

## Sources

- `design/concept/docs/concept.md` (Designer's taste and the five attributes)
- `design/concept/docs/references.md` (base and borrowed techniques)
- `design/concept/assets/brand-plate-b.png` (the approved plate)
- `voice/docs/voice.md` (tone, dictionary, forbidden)
- `research/docs/personas.md`, `research/docs/benchmark.md` (the anxieties and trust mechanisms)

---

## Note on DESIGN.md

The product DESIGN.md is not created at this stage. Stage 07 (`/impeccable document`) forms it from the real code of the colored screens in `design/` plus this DESIGN-artifacts.md. This file is the draft input, not the product spec.
