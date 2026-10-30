# Mehfil-E-Baithak (Nuxt 4)

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static site in .output/public
```

- `app/data/site.ts`: all page content (events, artists, gallery, team, contact details). Edit here, not in components.
- `app/components/`: one component per section, plus `SectionHead` and `TimelineThread`.
- `app/animations/` and `app/composables/useSiteAnimations.ts`: GSAP hero, scroll reveals and couplet rotator.
- `app/composables/`: `useTanpura` (drone), `useGuestbook` (pinned notes in localStorage).
- Hosting under a sub-path (e.g. GitHub Pages): `NUXT_APP_BASE_URL=/Mehfile-e--baithak/ npm run generate`.
