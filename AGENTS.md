<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:global-website-rules -->
# Global Website Rules — Arab Egypt Co. for Lifts

These rules apply to **every component, section, and file** built from now on. No exceptions.

## 1. Bilingual (EN/AR) — Required
- Every component must support **English (LTR)** and **Arabic (RTL)**.
- All text, buttons, labels, placeholders, titles, CTAs, and page content must exist in both languages.
- Arabic uses the Cairo font (`font-cairo`), English uses Raleway (`font-sans`).

## 2. Fully Responsive — Required
Test every component on these breakpoints before finishing:
`320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920`

Verify:
- No horizontal scrolling
- No clipped content
- No overlapping
- No broken animations
- No layout shift

## 3. No Fixed Heights
- Never use `height: Xpx` unless absolutely necessary.
- Prefer: `min-height`, `padding`, `gap`, `flex`, `grid`, `aspect-ratio`.

## 4. No Magic Numbers
- Avoid arbitrary offsets like `top: -60px`, `left: -120px`, `transform: translate(...)` unless absolutely required.

## 5. GSAP + ScrollTrigger Independence
- Each section creates and cleans its **own** ScrollTrigger.
- Animations must **never** depend on previous section's height.
- Always kill ScrollTriggers on unmount: `ScrollTrigger.getAll().forEach(t => t.kill())`.
- Register plugins: `gsap.registerPlugin(ScrollTrigger)`.

## 6. No Blank Spaces
- Each section must naturally follow the previous one.
- No unexplained whitespace. No hidden sections occupying space.

## 7. Media (Images / Video)
- Must keep aspect ratio. Must never stretch.
- Use `Next/Image` where possible.
- Lazy-load below-the-fold media.
- Must be responsive.

## 8. Typography
- Use `clamp()` for titles and paragraph sizes.
- No fixed pixel font sizes for responsive layouts.

## 9. Shared Container
- Use one consistent container width across the project.
- Keep horizontal spacing uniform.

## 10. Accessibility
- Keyboard navigation. Visible focus states. ARIA labels. Semantic HTML.

## 11. Performance
- No unnecessary rerenders. `useMemo` / `useCallback` expensive computations.
- Split large animations. Lazy-load heavy sections.

## 12. Navbar — Frozen
- The floating MENU button (SideMenu component) is considered **finished**.
- Do not redesign or reposition it unless explicitly requested.
- Future work must preserve its responsive behavior.
<!-- END:global-website-rules -->
