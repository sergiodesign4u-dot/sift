# Concept - Sift

*How Sift's visual language is found and fixed. Taste is written down here, not held in the head, so a new prompt cannot return the model default. Attributes are derived from the data (personas, jtbd, voice, references), each pair naming its source line. Brand (Step 3) and Layout (Step 5) are appended below as they are chosen.*

Internal document, English. No em dash anywhere in this file.

---

## Designer's taste

*Given by the designer (Step 2), not invented. The reason on each line is what the product is known for in craft, not a claim about the designer.*

### Likes (products to be kin to)

- **Linear** - calm dark command-center; layered neutrals, a single restrained accent, weight carried by hierarchy rather than color. The reference base (see `references.md`).
- **Stripe / Stripe Docs** - light, precise, enterprise-grade trust; impeccable typography and spacing, quietly confident, nothing loud. Reads as serious and reliable.
- **Perplexity** - warm editorial calm; parchment neutrals, inline citations, academic clarity. Feels like a trusted analyst, not a tech product.
- **Vercel / Geist** - stark monochrome, high contrast, typography does the work, tiny semantic accents only. Developer-tool rigor.

**What the four share (the through-line):** precise, restrained, typography-first, trustworthy. None of them shouts. This is a coherent taste, not four directions, and it confirms the Linear base while pulling toward editorial precision.

**The one open split:** the four span dark (Linear, Vercel) and light (Stripe, Perplexity). The data does not decide dark or light - both serve calm under density. This is not a data-versus-taste conflict; it is a palette question, resolved on the Step 3 brand plates, which will be generated across that range.

### Anti-references (never this)

- **Warm cozy AI** - cream and terracotta, soft blush gradients, rounded consumer friendliness. The reflex answer to "calm," and guessable from the category. Concrete instance found in search: Steep (`references.md`, rejected reflexes).
- **Generic corporate SaaS** - default Bootstrap or Material blue, stock gradients, drop shadows, hero illustrations of tiny people. Anonymous, and anonymity reads as untrustworthy for a tool whose whole job is trust.

*(Data constraint, separate from taste: "Calm, not loud" (voice.md, Principle 3) also rules out loud or theatrical BI, neon on dark, chart-salad density, even though those were not named as anti-references. Recorded so Step 3 does not drift there.)*

---

## Attributes

*Five pairs of visual opposites. Each is derived from a data line and carries a borrowed technique from `references.md`. No pair contradicts the taste above; a decision without a pair here is invention, and gets removed or sent back to this section.*

### 1. Quiet, not loud

- **From:** "Calm, not loud ... carry weight with plain statements and hierarchy, never with exclamation, celebration, or alarm" (voice.md, Principle 3); "Hierarchy, weight, and whitespace do the work of focus, not color, badges, or alerts" (CLAUDE.md, Design Principle 2); the reader works in 10 to 15 minute sessions and "loud copy is friction" (personas.md O8).
- **Visual translation:** layered neutral surfaces for depth; a single restrained accent, reserved for the one primary next action; weight through type hierarchy and whitespace, not through color or badges.
- **Technique (reference):** Linear base, one accent on layered neutrals (`references.md`, base). Kin to the Linear and Vercel taste.

### 2. Evidence on the surface, not hidden

- **From:** "the presence of the citation, not the reading of it, is the trust signal" (benchmark.md, Mechanism 1; personas.md O10); Alex needs "the ability to drill down to the raw source" and stops trusting "confident presentation with no visible reasoning" (personas.md, Persona A); "n=42 shown next to the theme" (voice.md, Principle 1).
- **Visual translation:** every theme statement carries a visible inline evidence count (n=X) in the claim itself; a citation affordance is always present, opening a side panel to the source. Nothing is asserted without its count on the surface.
- **Technique (reference):** inline citation badge plus side citation panel (Parallel / Perplexity, `references.md`, technique 1). Kin to the Perplexity taste.

### 3. Honest about thin, not uniformly confident

- **From:** "Earn the claim, do not assert it ... say so out loud when it is thin," "n=6 low signal," "a theme presented in the same weight whether it rests on 4 mentions or 400" is the anti-example (voice.md, Principle 1); Alex's trust trigger 5, "Honest admission when evidence is thin" (personas.md); D2, confidence is n=X plus a low-signal badge (CLAUDE.md).
- **Visual translation:** the low-signal mark is small, quiet, and semantic, information rather than a red alarm; the strong theme and the thin theme differ in weight, not in decoration; the thin theme is never dressed up.
- **Technique (reference):** a tiny semantic status accent on a monochrome field (shadcn/ui, `references.md`, detail 3). Kin to the Vercel taste (monochrome, tiny accent).

### 4. Ranked clarity, not a raw dump

- **From:** "the synthesis is the value, the drill-down is the trust mechanism," synthesis first and detail on demand (personas.md O5; ux-patterns.md B1, marked most critical); Alex's trust trigger 3, "Visible sample size and evidence count per theme"; "One decision at a time ... a clear what should I do next" (CLAUDE.md, Design Principle 4).
- **Visual translation:** the Synthesis view resolves density into a ranked list; each row is a theme plus a volume bar plus n=X; the raw material is reached by drilling, not dumped on the first screen.
- **Technique (reference):** ranked rows with a volume bar and click-to-drill (Mercury / Amplitude, `references.md`, technique 2). Kin to the calm-dense Linear and Stripe taste.

### 5. The customer's plain words, not product marketing

- **From:** "Speak the customer's words, not the product's ... never re-dress feedback in product or marketing vocabulary" (voice.md, Principle 2); Alex stops trusting when "themes sound like they were written by a marketing team" (personas.md, Persona A, stop-trust 3); Forbidden: hype adjectives, marketing tone (voice.md, Forbidden).
- **Visual translation:** the theme statement is set as readable, quotation-grade prose type, an editorial finding, not a branded headline or a colored label chip; evidence snippets get a quieter quote treatment; typography, not chrome, carries the meaning.
- **Technique (reference):** typography-first editorial restraint (Stripe, Perplexity, Vercel taste; Linear's "type does the work"). Kin to all four likes.

---

## Brand

*Chosen on Step 3 from three generated brand plates (`design/concept/assets/brand-plate-{a,b,c}.png`).*

**Chosen: Plate B, "Command center"** (`design/concept/assets/brand-plate-b.png`).

- **Why:** the most product-native of the three, and the etalon (2.0 Synthesis view) is exactly this dense dark surface. Its center of gravity is the Designer's taste (Linear, Vercel / Geist) and the `references.md` base language, calm under density. The fixing scene: the PM at 9pm in a dim room, screen as the only light, the interface receding so the signal stands out.
- **Two corrections applied when entering `DESIGN-artifacts.md`:** the mark is flattened to monochrome (no cyan gradient, to keep the single-accent discipline, A1), and Cyan `#33C4CC` is fixed as the one accent.
- **The approved brand now lives in the root `DESIGN-artifacts.md`** (identity, palette with roles, typography, icon language, UI tone), each decision signed with an attribute here.

**Not chosen, kept on record (can return to these):**
- **Plate A, "Analyst's desk"** (`brand-plate-a.png`): light cool off-white plus deep teal, editorial serif on theme statements. Warmer, closest to Stripe / Perplexity. Its serif-for-theme-statements is recorded in `DESIGN-artifacts.md` as an open option for Step 5.
- **Plate C, "Evidence ledger"** (`brand-plate-c.png`): stark monochrome, ruled ledger grid, a single semantic red only on low-signal. The most ownable brand idea, but the coldest.

## Layout

*Chosen on Step 5 from three live layout directions (`design/concept/directions.html`), all on the one brand B.*

**Chosen: Direction 3, "Split evidence."**

- **Why:** it makes Sift's differentiator spatial, the evidence stays visible while you read the ranked themes, so the drill happens without leaving the view (A2, the hardest attribute to honor). The etalon 2.0 Synthesis is the right home for it, and compositionally it is almost a superset: the left pane is Direction 1 (the ranked ledger), the right pane is Direction 2 (the evidence reading). Answers A2 first, carries A4 and A1 in the left pane.
- **IA implication (carried to Step 7):** Direction 3 pulls Theme-detail (4.0) evidence into the Synthesis view (right pane). So the second, contrast screen should be a genuinely different density, the public Shared brief (6.4) or the Evidence source (5.0), not Theme detail.

**Revised August 2026, after the wireframe rebuild: the split pane is deferred, and A2 is answered
in one column.** The premise of the choice changed under it. Direction 3 was chosen when the theme
card carried no quote, and what it was buying was evidence before the click. The block bank then
gave the etalon exactly that inside one column: a representative verbatim on every card
(`ia/docs/blocks.md`, Type 2, row 10) plus the scope line stating the denominator. So the attribute
the direction existed to serve is now served without the structural change.

What is kept from Direction 3, and what is not:
- **Kept:** the left pane, which is the ranked ledger, and it is what the etalon is. The
  evidence-quote treatment from Direction 2 (numbered citation plus scrubbed source) is kept too,
  on 4.0 and on the contrast screen.
- **Deferred, LATER:** the standing right-hand evidence pane. It is a real deepening of the drill,
  not a wrong idea, but it is a structural change to node 2.0, and structure belongs to IA and to
  the wireframes, never to a colour copy. It would also have to fold back into one column at 360,
  which is where the etalon does most of its arguing.
- **The rule that decided it:** a colour copy owns the visual layer only. Implementing the split
  here would have made `design/` and `wireframes/` disagree about what screen 2.0 is, and the grey
  contract is the thing that keeps the colour layer reversible.

**Contrast screen for Step 7: 6.4 Shared brief.** The record above rules out 4.0, and 6.4 is the
harder test anyway: no app chrome, no action for the accent to sit on, and a reader who did not ask
for the document and will leave if it looks like an advert.

**Not chosen, kept on record:**
- **Direction 1, "Dense ledger"**: the pure dense-list alternative, whole month at a glance, drill to a separate theme page. Its ledger row is reused as the left pane.
- **Direction 2, "Focus column"**: the editorial single-column reading rhythm. Its evidence-quote treatment (numbered citation plus scrubbed source) is reused in the right pane.

---

## Imagery

*Data first, not photo first. Recorded for reproducibility.*

- **App surfaces carry no decorative photography.** The evidence is text; the calm comes from hierarchy and whitespace (Design Principle 2, attribute A1). No stock imagery, no illustration, no avatars of invented people (feedback authors are PII-scrubbed, so a face would be a lie). Where a source needs a face it is a monochrome channel token (Intercom, Zendesk, CSV).
- **Photography appears in one place only:** the marketing Home hero (0.0), a single restrained real photograph, never a grey placeholder and never on an app screen.
- **Photo list (Unsplash, direct links, reproducible):**
  - Home hero: `https://images.unsplash.com/photo-1497215728101-856f4ea42174` (a calm office workspace). Shown on `concept.html` Imagery section. Verified to load (HTTP 200).
