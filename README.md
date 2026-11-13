# Luma Learning

A responsive Luma learning landing page built with Next.js, TypeScript, and Tailwind CSS.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint` for a TypeScript
check and `npm run build` to create the production build.

## Firebase Hosting

The project is configured for Next.js static export. `npm run build` generates the
deployable site in `out/`, and `.firebaserc` selects the `buzzvel-test-33ca9` Firebase
project. Sign in with the Firebase CLI and deploy with:

```bash
npx firebase-tools login
npm run deploy:firebase
```

Next.js image optimization is disabled so exported images are served as static files.
The Inter variable font is self-hosted in `public/fonts/` under the SIL Open Font License.
Page images live in `app/assets/images/` and are imported statically so each image gets a
content-hashed URL. Keep the immutable cache policy for `/_next/static/` assets; don't
copy page images into `public/images/` or add an immutable policy for mutable image paths.
This ensures replacing an image changes its URL and prevents browser/CDN caches from
serving the previous file after deployment.
