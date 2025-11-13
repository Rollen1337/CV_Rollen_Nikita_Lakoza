# CV — Nikita "Rollen" Lakoza

A modern, multilingual CV website showcasing the professional profile of Nikita "Rollen" Lakoza, a freelance Counter-Strike 2 and Dota 2 Observer/Esports professional.

## Features

- **Multi-language Support**: Available in English, Russian, German, and Romanian with easy language switching
- **Theme Switching**: Light, dark, and system theme preferences with persistent storage
- **Responsive Design**: Optimized for all screen sizes and devices
- **Accessibility**: Built with ARIA labels, semantic HTML, and keyboard navigation support
- **Portfolio Showcase**: Interactive carousel displaying professional highlights and achievements
- **PDF Export**: Export functionality for generating downloadable CV documents (coming soon)
- **Tournament Information**: Comprehensive display of tournaments and events with categorized listings
- **Modern UI**: Clean, professional design with smooth animations and transitions

## Tech Stack

- **React 19** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **pnpm** — Package manager

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm 8.9.2+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CV_Rollen_Nikita_Lakoza
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `pnpm dev` — Start development server with hot module replacement
- `pnpm build` — Build the project for production (TypeScript compilation + Vite build)
- `pnpm preview` — Preview the production build locally
- `pnpm lint` — Run ESLint to check code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── LanguageSwitcher.tsx
│   ├── PortfolioCarousel.tsx
│   ├── Section.tsx
│   └── ThemeSwitcher.tsx
├── data/               # Static data (tournaments, etc.)
├── features/           # Feature-specific modules
│   └── pdfExport/
├── i18n/               # Internationalization
│   ├── locales/        # Translation files (en, ru, de, ro)
│   └── ...
├── theme/              # Theme management
└── App.tsx             # Main application component
```

## Building for Production

To create an optimized production build:

```bash
pnpm build
```

The output will be in the `dist/` directory, ready for deployment to any static hosting service.

## Deployment

The built application can be deployed to any static hosting service such as:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Simply point the deployment service to the `dist/` directory after running `pnpm build`.

## License

This project is private and proprietary.
