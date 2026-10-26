# SynthixHQ

> Official web platform for **SynthixHQ** (`synthixhq.com`) - an engineering studio focused on autonomous agent architectures, local LLM inference pipelines, and scalable generative applications.

[![Live Web Platform](https://img.shields.io/badge/Website-synthixhq.com-2563EB?style=flat-square)](https://synthixhq.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)

---

## Overview

SynthixHQ bridges cutting-edge generative AI research with industrial-grade systems engineering. The platform showcases core initiatives, local inference benchmarks, and active solutions while upholding strict principles of data sovereignty and architectural discipline.

### Highlights

- **Vibrant & Block-based Dark UI**: Designed for maximum clarity, contrast, and visual rhythm.
- **Multilingual Support (i18n)**: Instant runtime localization across English (default), Russian, German, and Spanish with persistent state.
- **Strict Accessibility Standards**: WCAG 2.1 AA compliant, 4.5:1 text contrast minimum, 44x44px touch targets, visible focus indicators, and `prefers-reduced-motion` support.
- **Zero Third-Party Tracking**: Completely decoupled from intrusive analytics, honoring user privacy.
- **Sub-Second Static Delivery**: Optimized production bundle tailored for edge distribution on Cloudflare Pages.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- **Build Tool**: [Vite 6](https://vitejs.dev)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com) with `@tailwindcss/vite`
- **Typography**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Headings) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Interface)
- **Icons**: [Lucide React](https://lucide.dev) (Strictly SVG vectors, 0 emojis as UI glyphs)
- **Edge Hosting**: [Cloudflare Pages](https://pages.cloudflare.com)

---

## Project Structure

```text
synthixhq.com/
├── public/                 # Static assets and icons
├── src/
│   ├── components/         # Modular UI sections
│   │   ├── icons/          # Custom SVG icon implementations
│   │   ├── Architecture.tsx # Topology visualization & system standards
│   │   ├── CallToAction.tsx # Direct engagement block
│   │   ├── Footer.tsx      # Platform status, resources, and copyright
│   │   ├── Hero.tsx        # High-impact banner with live metric cards
│   │   ├── InteractiveShowcase.tsx # Accessible case studies carousel
│   │   ├── Navbar.tsx      # Sticky header with responsive navigation & i18n
│   │   ├── Projects.tsx    # Core solutions & product showcase
│   │   └── TechStack.tsx   # Categorized infrastructure & model stack
│   ├── i18n/
│   │   └── translations.ts # Full multilingual dictionary (EN, RU, DE, ES)
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Tailwind v4 theme definitions and accessibility rules
│   ├── main.tsx            # React DOM mounting entry point
│   └── vite-env.d.ts       # Vite client typing declarations
├── index.html              # HTML5 entry with preconnected Google Fonts
├── package.json            # Dependencies and build scripts
├── tsconfig.json           # Strict TypeScript compiler options
└── vite.config.ts          # Vite plugin configuration
```

---

## Getting Started

### Prerequisites

- Node.js `20.x` or later (tested on Node.js `22.x`)
- npm `10.x` or later

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/synthixhq/synthixhq.com.git
cd synthixhq.com
npm install
```

### Development

Run the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

Compile the TypeScript code and generate the optimized static build:

```bash
npm run build
```

The compiled assets will be placed in the `dist/` directory.

### Preview Build

Preview the production bundle locally:

```bash
npm run preview
```

---

## Deployment

The project compiles to an optimized, self-contained static bundle in the `dist/` directory:

```bash
npm run build
```

The resulting assets can be hosted on any modern static hosting platform or edge network (such as Cloudflare Pages, Vercel, AWS S3/CloudFront, or served directly via Nginx).

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Alexander Malofeev**
- GitHub: [@synthixhq](https://github.com/synthixhq)
- Web: [synthixhq.com](https://synthixhq.com)
