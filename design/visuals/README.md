# Visuals - Sift

*Stage 07 Step 4. What imagery this product carries, what it deliberately does not, and the
prompt that keeps any future frame in the same colorimetry. Visible in a browser as the VISUALS
block of the Inventory section on `design/kit/kit.html`.*

*Internal document, English. No em dash anywhere in this file.*

---

## The set is empty, and that is the finding, not a gap

The composition of this set is read from the Photo column of `design/kit/inventory.md`, not
decided again here. That column says **No on all fifty rows**. The mechanical read behind it: the
entire grey product, 38 files, contains not one `<img>`, `<figure>`, `<picture>` or
`background-image`. There is nothing in the product for a photograph to sit in.

That is not an omission upstream. `design/concept/docs/concept.md:150` states the rule and its
reason: app surfaces carry no decorative photography, because the evidence in this product is
text and the calm comes from hierarchy and whitespace (Design Principle 2, attribute A1). It goes
further, and the reason is specific to what Sift is: **no avatars of invented people, because
feedback authors are PII-scrubbed, so a face would be a lie.** A product whose whole promise is
that every claim traces back to a real customer cannot decorate itself with fake customers.

## The one place that wanted a photograph has no slot for it

`concept.md:151` allows photography in exactly one place: the marketing Home hero on node 0.0, a
single restrained real photograph. **The wireframe of 0.0 has no image block.** Its five blocks
are hero copy, how it works, trust, pricing and the footer link block, all of them text.

Adding one in a colour copy would be a structural change, and structure is the property of
`wireframes/`, which the contract freezes after Voice. So this step had two honest options and
the second was taken:

- **(a)** go upstream, add a hero image block to IA node 0.0 and to `wireframes/index.html`, then
  generate one frame for it.
- **(b) taken.** Record that this product carries no photography at all, and hold the prompt
  ready so that if 0.0 ever gains the block, the frame arrives in the right colorimetry instead
  of being improvised.

(b) is the reversible one. It costs one markdown file to undo; (a) costs an edit to a frozen
folder, an IA node, and a block that no job, barrier or SEO requirement has asked for. If the
hero block is ever justified upstream, the prompt below is what fills it.

## What is on `concept.html` today, and why it is not a product asset

The Imagery section of `design/concept/docs/concept.md:153` carries one Unsplash link, a calm
office workspace, shown on the concept stand. **That is a stock photograph, and it illustrates
the rule rather than shipping inside the product.** It sits on a stand, not on a screen. Stage 07
forbids stock imagery in the product; it does not reach back into a Stage 06 stand that is
arguing about imagery in the first place. If the hero block is ever built, the frame comes from
the prompt below and the Unsplash link is retired in the same step.

## The avatar stays a disc

The related and smaller case. The avatar is a monochrome placeholder disc, 28px in the app bar
and 40px on the account identity block, and it stays that way by the same rule: it stands for the
signed-in operator, and the product has no reason to invent a face for them either. Where a
source needs an identity it is a monochrome channel token (Intercom, Zendesk, CSV), which is what
the icon slot atom already carries.

---

## The one prompt, held ready

Generator: **Magnific, Google Nano Banana 2, 4k**. Access was verified in this session (plan
Premium+, credits available), and it was not run, because there is no slot to fill. One frame,
one colorimetry, and the colorimetry is not a taste call: it is the palette of `DESIGN.md`.

**File name:** `hero-workspace.jpg`
**Where it would go:** node 0.0 marketing hero, if and only if that block exists upstream.

```
A calm, low-key photograph of an empty modern workspace at first light. One desk, one closed
laptop, a paper notebook and a glass of water; nothing staged, nothing branded, no logos, no
screens showing any interface. No people and no faces anywhere in frame.

Light: soft directional daylight from a large window on the left, deep shadow falling to the
right, no visible light fixtures, no lens flare, no bloom.

Colour: cool and desaturated, near-monochrome. Blacks sit at #0B0E11 and the deepest greys at
#151A1F, so the image sits down into a dark interface rather than glowing out of it. Midtones
are neutral grey with a slight blue-green cast. Exactly one warmer accent is allowed, a single
small cyan-teal highlight near #33C4CC, on a reflection or an edge, occupying under two percent
of the frame.

Composition: wide 16:9, the subject held to the left third, the right third left almost empty so
that headline text can sit over it with room to breathe. Shallow depth of field, focus on the
notebook.

Rendering: real photograph, 35mm, natural grain, no HDR, no illustration, no 3D render, no text
or lettering of any kind in the image.
```

**Why this frame and not a photograph of people.** The screen it would open is the one place a
stranger meets this product, and the claim on it is that scattered feedback becomes a decision
somebody can defend. A desk before the working day says the work has not started yet, which is
where the visitor is standing. A photograph of a team celebrating would say the opposite of the
whole product, which acknowledges ambiguity rather than performing confidence, and it would
break the same rule that keeps invented faces out of the evidence.

**Why these colour instructions are this specific.** A stock frame shot by somebody else lights
differently every time, and six of them in a row read as a collage. The blacks are pinned to the
canvas value so the image has no seam where it meets the page, and the one cyan highlight ties it
to the single accent the whole product spends on the next move. Any future frame reuses this
block verbatim and changes only the subject line.
