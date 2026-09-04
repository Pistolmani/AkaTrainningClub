# CLAUDE DESIGN BRIEF — AKA Individual Training Academy Website

## Project
Landing + info site for **AKA Individual Training Academy**, a football training academy founded by Akaki, a former professional footballer. The site must (1) convert parents into signing their kids up, (2) build credibility around Akaki and the academy, and (3) serve as an info hub for current members.

## Brand identity — non-negotiable

- **Name**: AKA Individual Training Academy (use full name in hero + footer; "AKA" acceptable as short form in nav)
- **Palette**:
  - Background: pure black `#000000` and near-black `#0A0A0A`
  - Primary accent: metallic gold `#D4AF37`
  - Highlight/glow gold: `#F4E4A6`
  - Warm amber (for CTA hover, active states): `#E8B547`
  - Text on black: off-white `#F5F1E8` (warm, not pure white — matches the gold's warmth)
  - Muted text: `#8A8272`
- **Typography**:
  - Display/hero: a hand-brushed or condensed athletic sans that echoes the wordmark's energy (candidates: *Anton*, *Bebas Neue*, or a brush face like *Permanent Marker* used sparingly for accent words only — main body should stay legible)
  - Body: clean modern sans (Inter, Manrope, or Space Grotesk) at high contrast on black
  - Georgian language support required — verify chosen typefaces have full Georgian glyph coverage; fallback to *Noto Sans Georgian* or *FiraGO*
- **Logo usage**: use the provided gold-on-black wordmark and player-silhouette mark. Never place on light backgrounds without a black container.
- **Signature motif**: the **glowing gold pitch-outline on black** must appear as a hero backdrop and can be reused as a subtle section divider or footer background. Treat it as a brand asset, not decoration.

## Tone & aesthetic
Elite, cinematic, spotlit. Feel of a professional academy at night under stadium lights. Dark, high-contrast, gold-forward, premium. Not corporate. Not "kids' club" cute. Think Nike/Adidas top-tier campaigns crossed with a boutique performance lab.

## Audience
- Primary decision-maker: **parents** of players aged 5–18
- Secondary influencer: **the kids/teens themselves** (they are social-media native and will judge the site's coolness — the aesthetic must earn their respect, not embarrass them)

## Languages
Georgian + English. Language toggle in top nav (EN / ქარ). Default to Georgian for local visitors; remember choice.

## Primary CTA
**WhatsApp contact.** Every section should have a path back to a floating "Message Akaki on WhatsApp" button (bottom-right, gold, subtle glow, always visible). Secondary CTA: "Book a Trial Session."

---

## Page structure & sections (single-page scroll with anchor nav)

### 1. Sticky top nav
- Logo mark (left, small)
- Anchor links: About · Programs · Pricing · Schedule · Gallery · Contact
- Language toggle (EN/ქარ)
- WhatsApp CTA button (gold, right)
- Transparent on hero, solidifies to `#0A0A0A` on scroll

### 2. Hero — full viewport
- Full-bleed **cinematic image** (use the glowing pitch-outline visual as backdrop)
- Wordmark centered upper-third
- Headline (large, brushed style): **"Train Like a Pro. Start Today."** (EN) / Georgian equivalent
- Subhead: one line about individual training under a former pro
- Two CTAs: primary gold "Message on WhatsApp" · secondary ghost "See Programs"
- Subtle downward chevron animation to invite scroll

### 3. About Akaki
- Two-column on desktop: portrait left (dramatic lighting, gold rim light), copy right
- Headline: "Coached by a Professional"
- Bio placeholder — Akaki's playing career, philosophy, why he founded the academy (client fills)
- Small stat row: years playing pro · players coached · years coaching (fill later)

### 4. Programs / Training approach
- Three cards or a horizontal scroll: **Team Training** · **Small Group** · **1-on-1 Individual**
- Each card: gold icon, short description, "what you'll develop" bullets (technique, fitness, tactical IQ, mental game)
- Emphasize the "Individual" pillar — it's in the academy's name for a reason

### 5. Pricing — three tiers
Cards on black, gold borders, hover raises + gold glow:

| Tier | Price | Frequency |
|---|---|---|
| **Team Training** | 200 GEL / month | 2× per week |
| **Team Training Plus** | 250 GEL / month | 3× per week |
| **Individual 1-on-1** | 500 GEL / month | personalized schedule |

Middle tier marked "Most Popular" with slightly brighter gold accent. Each card ends with a WhatsApp CTA prefilled with the tier name.

### 6. Schedule & Location
- Weekly schedule table (day × time × program), dark card with gold divider lines
- Embedded map (dark-mode styled) pinned to the training location
- Address, contact number, WhatsApp link

### 7. Facility & Training Gallery
- Grid of photos of the actual pitch/facility where training happens
- Lightbox on click, black overlay
- Mix of wide facility shots and action shots

### 8. Testimonials / Success stories
- Quote cards from parents and players
- Optional: highlight any players who progressed to competitive clubs
- If none yet, replace with "Our Philosophy" — 3–4 principles from Akaki

### 9. Contact
- Big final block, black with pitch-outline background at low opacity
- Headline: "Ready to Start?"
- Primary: giant WhatsApp button
- Secondary: contact form (name, child's age, preferred program, message)
- Social icons: Instagram, TikTok, Facebook

### 10. Footer
- Wordmark, address, copyright, socials, small language toggle
- Fine gold hairline separator top

---

## Interaction & motion
- **Scroll-triggered fade-ins** for section content (subtle, 400ms, gold underlines drawing in on headings)
- **Hero backdrop**: slow subtle parallax or a *very* slow glowing-line animation on the pitch outline (as if the paint is still drying — one loop every 8–12s)
- **Hover states**: gold text lifts to highlight gold, cards get a soft gold outer glow
- **Buttons**: gold fill for primary; ghost/outlined for secondary; both with warm-amber hover
- Respect `prefers-reduced-motion`

## Responsive
Mobile-first. Hero must land hard on a phone screen — the wordmark and CTA visible without scroll. Sticky WhatsApp button on mobile is critical. Pricing cards stack; schedule becomes a scrollable list.

## Accessibility
- Contrast: gold on black passes AA at 16px+ (verify — bump size or brighten to `#F4E4A6` where needed for smaller text)
- Focus rings in gold, always visible
- Alt text on all imagery
- Georgian and English both have full nav parity

## Technical suggestions (Vercel / Next.js)
- Next.js App Router, deploy on Vercel
- `next-intl` for EN/ქარ locale routing
- Images through `next/image` with priority on hero
- WhatsApp CTA = `https://wa.me/<akaki-number>?text=<prefilled>` — swap number in one config file
- Contact form → simple Server Action posting to email (Resend) or a Google Sheet — no DB needed for MVP

## Copy placeholders to fill later
- Akaki's bio and career highlights
- Exact address / map pin
- WhatsApp phone number
- Social handles (Instagram/TikTok/Facebook)
- Testimonial quotes
- Facility photos (real ones, not AI, for gallery)

## Assets provided
- `AKA.png` — primary logo lockup (gold wordmark + player silhouette on black)
- `IMG_4256.png` — brushed wordmark only
- `Gemini_Generated_Image_yo1cg9yo1cg9yo1c.png` — glowing gold pitch outline on black, "Start Today!" — use as hero backdrop reference

## Success criteria
A parent lands on this site on their phone at night, and within 10 seconds thinks *"this looks serious — my kid should train here"*, and their next action is tapping the gold WhatsApp button.
