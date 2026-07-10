# P.Okeke Heavy Civil — Website

A modern, static marketing website for **P.Okeke Heavy Civil**, a heavy civil
construction company. Built with **Vite + React** and hand-crafted CSS — no UI
framework dependencies, no backend.

## Tech

- [Vite 6](https://vite.dev/) — build tooling & dev server
- [React 18](https://react.dev/) — component UI
- Plain modern CSS (custom properties, grid, responsive)
- Google Fonts: Barlow Condensed + Inter

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Structure

```
index.html
public/
  favicon.svg
src/
  main.jsx              # React entry
  App.jsx               # page composition
  data/site.js          # all editable content (copy, stats, services, projects)
  components/           # section components (Hero, Services, Projects, …)
  styles/index.css      # global stylesheet
```

## Editing content

Almost all copy — company info, stats, services, featured projects, and the
delivery process — lives in [`src/data/site.js`](src/data/site.js). Update the
values there and the relevant sections re-render automatically.

## Notes

- The contact form is front-end only (shows a success state on submit). Wire it
  to an email service or form backend (e.g. Formspree, Netlify Forms, or an API
  route) before going live.
- All imagery is rendered with CSS so the site stays lightweight and dependency-
  free. Drop real project photography into the `.project__visual` blocks when
  available.
