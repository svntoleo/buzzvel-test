# Luma Learning

A responsive Luma learning landing page built with Next.js App Router, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20.9 or later
- npm

## Install and run

Install dependencies, then start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and checks

```bash
npm run lint
npm run build
```

`npm run lint` runs the TypeScript check. `npm run build` creates the production static export in `out/`.

## Componentization

The App Router page composes the header, page sections, and footer from focused components. `app/components/sections.tsx` contains the landing-page sections; `ui.tsx` and `links.tsx` hold shared presentation elements and links; `site-header.tsx` and `contact-form.tsx` isolate interactive UI. Typed content and image collections are kept in `content.ts`, rather than duplicated across sections.

The page uses server-rendered components by default. Client-side behavior is limited to the interactive menu and contact form.

## Key decisions

- Use Next.js static export (`output: "export"`) so Firebase Hosting can serve the site without a server runtime.
- Self-host the Inter variable font to keep typography consistent and avoid external font requests. Its license is in `public/fonts/`.
- Statically import page images from `app/assets/images/`. Next.js includes a content hash in each exported image URL, so replacing an image changes its URL.
- Apply immutable caching only to `/_next/static/**`; the homepage HTML must revalidate so visitors receive updated asset references.
- Keep interactions frontend-only; no backend or CMS is required for this landing-page implementation.

## Firebase Hosting deployment

Firebase Hosting is configured to serve the static export from `out/`. The selected project is `buzzvel-test-33ca9` in `.firebaserc`.

1. Authenticate with an account that has access to the Firebase project:

   ```bash
   npx firebase-tools login
   ```

2. Build the site and deploy the generated output:

   ```bash
   npm run build
   npm run deploy:firebase
   ```

The deploy script publishes Hosting only and does not build the site for you. Rebuild before each deploy so `out/` contains the latest page and assets.

## Known gaps

- The contact form displays a client-side confirmation only; it does not submit or store messages.
- Course and testimonial content is local mock content. There is no CMS, API, or database integration.
- Firebase is used for static hosting only. Firebase Analytics and other Firebase SDK products are not configured.
- The original Figma source assets could not be exported in this environment; the page uses the image assets currently included in the repository.
- There is no automated browser or component test suite yet.

## Approximate effort

Estimated implementation and refinement effort: about **8 hours** across the responsive page, component refactor, typography and image updates, static hosting setup, and image-cache fix. This is a retrospective estimate, not tracked time.

## AI tools

GitHub Copilot (AI assistant in VS Code) was used to help implement and refine the page, investigate the image-caching behavior, and update project documentation. Build and TypeScript checks were run locally; no AI tool performed the Firebase deployment.
