# Independent Builders — Astro Blog

A static, zero-backend blog built with Astro + Markdown.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Astro.

## Add a new story

Create a Markdown file in:

`src/content/blog/your-story.md`

Use this frontmatter:

```yaml
---
title: "Your title"
description: "A short description"
date: "2026-08-20"
category: "Freelancing"
tags: ["clients", "projects"]
author: "Your Name"
readingTime: "5 min read"
featured: false
---
```

Then write normal Markdown below it.

## Categories

- Freelancing
- Startups
- Business
- AI
- Money

## Deploy

Push the project to GitHub and connect the repository to Cloudflare Pages.

Build command: `npm run build`

Output directory: `dist`

Before going live, change `site` in `astro.config.mjs` from `https://example.com` to your real site URL.
