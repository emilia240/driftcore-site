## Copilot instructions

### General mindset
- This is a static Vue 3 website (no backend, no API).
- Every file uses Vue 3 Composition API with `<script setup>` syntax.
- Code must follow **Single Responsibility Principle (SRP)**, **Separation of Concerns (SoC)**, and **DRY**.

### Component architecture
- **Smart components (containers)**: views in `src/views/` that handle page‑level logic and data.
- **Dumb components (presentational)**: reusable pieces in `src/components/common/` and `src/components/sections/`.
- Dumb components only receive props and emit events; they never fetch data or contain business logic.
- Always use `<script setup>` and `<template>` with Tailwind utility classes.

### Styling
- Use Tailwind CSS v3 with custom theme colors: cream (#F9F9F9), navy (#213345), blue-light (#E4ECFC), blue-muted (#4A5D87), cyan (#54C9EB).
- Fonts: Bricolage Grotesque for headings (`font-heading`), Inter Tight for body (`font-body`).
- Fluid font sizes are defined as `text-h1` through `text-h5` and `text-body` (clamp‑based).
- Rounded corners: `rounded-xl` is 25px by default.

### Interactivity
- Use **Headless UI** for navigation (Disclosure), modals (Dialog), toggles, etc. – unstyled, accessible.
- Use **@vueuse/motion** (`v-motion` directive) for scroll‑triggered and hover animations.
- Animations must be added last, after all pages and layouts are complete.

### Folder structure
- `src/views/` – page components
- `src/components/common/` – NavBar, Footer, CTAButton, etc.
- `src/components/sections/` – HeroSection, FeatureCards, etc.
- `src/composables/` – reusable stateful logic (if needed)
- `src/router/index.js` – Vue Router with lazy‑loaded views

### Vue Router
- All routes are lazy‑loaded: `() => import('../views/...')`
- Navigation guards only when necessary (e.g., protecting login/signup if auth is later added).

### Code quality
- Every component must have a clear, single responsibility.
- Extract repeated logic into composables.
- Props must be typed using `defineProps({...})` or TypeScript‑style `interface` if TS is used (currently plain JS).
- Use `const` for immutable values, `let` for mutable.
- No `var`; no jQuery.

### Git & commits
- Follow **Conventional Commits**:
  - Format: `type: description`
  - Types: `feat`, `fix`, `style`, `refactor`, `chore`, `docs` etc.
  - First word capitalized, imperative mood, max 50 characters summary.
- Branch per feature (e.g., `feat/homepage`), merge with a conventional commit message.

### Responsive Design
- Always use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) to adapt layouts.
- Prefer **flex** and **grid** for layouts: `flex`, `flex-col`, `flex-wrap`, `grid`, `grid-cols-*`, `gap-*`.
- Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` as the standard page width container.
- Ensure all text, buttons, and interactive elements remain large enough and readable on all screen sizes (minimum touch target 44x44px).

### Accessibility
- Every image gets an `alt` attribute.
- Interactive elements (buttons, links, form inputs) must have visible `:focus` outlines (`focus:ring-2`, `focus:ring-cyan`, etc.).
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<button>`.
- Add `aria-label` for accessibility when necessary (e.g., icon buttons without text).
- Forms: every `<input>` pairs with a `<label>` (or `aria-label`), and provides clear error/success messages.
- Maintain color contrast: navy (#213345) on cream (#F9F9F9) is fine; avoid pairing blue-muted (#4A5D87) on navy without checking.

### AI behaviour
- When generating code, always apply the above rules.
- Prefer Composition API, `<script setup>`, and Tailwind utilities.
- Keep components small and focused; never build "God components".