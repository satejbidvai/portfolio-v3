# Portfolio v3

Personal portfolio site for Satej Bidvai.

## Tech Stack

- **Astro 5.14.1** — Static site generation
- **Tailwind CSS 4.1.14** — Utility-first styling with design tokens
- **TypeScript** — Type safety
- **Geist Font** — Typography
- **Vercel** — Hosting

## Project Structure

```
portfolio-v3/
├── src/
│   ├── pages/           # Route pages (index.astro)
│   ├── components/      # Reusable Astro components
│   └── styles/          # Global styles and design tokens
├── public/              # Static assets (favicons, images)
└── dist/                # Build output (generated)
```

Components are organized by feature/page for better maintainability as the site grows.

## Development Workflow

All commands run from the project root:

```bash
# Install dependencies
pnpm install

# Start dev server at localhost:4321
pnpm dev

# Build for production (includes type checking)
pnpm build

# Preview production build locally
pnpm preview
```

The build process includes `astro check` for TypeScript validation before generating the static output.

## Deployment

Deployed on Vercel with automatic deployments from the `main` branch. Configuration managed via `vercel.json`.
