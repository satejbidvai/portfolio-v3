# Portfolio v3

Personal portfolio site for Satej Bidvai.

## Tech Stack

- **Astro 7.2.1** - Static site generation
- **Tailwind CSS 4.2.1** - Utility-first styling with design tokens
- **TypeScript** - Type safety
- **Bun** - Package management and runtime
- **Geist Font** - Typography
- **Vercel** - Hosting

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
bun install

# Start dev server at localhost:4321
bun run dev

# Build for production (includes type checking)
bun run build

# Preview production build locally
bun run preview
```

The build process includes `astro check` for TypeScript validation before generating the static output.

## Deployment

Deployed on Vercel with automatic deployments from the `main` branch. Configuration managed via `vercel.json`.
