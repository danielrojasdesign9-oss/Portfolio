# Legacy Sanity scripts (DO NOT RUN)

One-off scripts from early content bootstrapping. **They write directly to the
Sanity production dataset with hardcoded `public: true` and full
`createOrReplace` payloads — running any of them clobbers titles, slugs,
content and visibility of live documents.**

Kept only as historical reference. The single supported writer is:

```
node scripts/import-case-studies.mjs --apply   # reads docs/projects-enhanced/**
```

| Script | What it did |
|---|---|
| `enrich-case-studies.mjs` | createOrReplace fitmaterial + claracare (public: true) |
| `enrich-core.mjs` | patch `content` of projects |
| `enrich-projects.mjs` | patch `gallery` of telemed + fashion-dtc |
| `finalize-projects.mjs` | createOrReplace fitmaterial + claracare (public: true) |
| `seed-personal-projects.mjs` | createOrReplace telemed + fashion-dtc (public: true) |
| `seed-portfolio-meta.mjs` | createOrReplace profile/meta (public: true) |
| `create-fit-claracare.mjs` | createOrReplace fitmaterial + claracare placeholders |
| `complete-research.mjs` | createOrReplace research projects (public: true) |
| `update-profile-content.mjs` | patch profile content |
| `fix-home.mjs` | patch profile homeDescription |
| `migrate-gallery.js` | one-off gallery migration patches |

Visibility truth source: `docs/projects-enhanced/**` META (`- **Public:**`).
