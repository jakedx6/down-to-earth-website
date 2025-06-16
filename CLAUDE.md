# Down to Earth Farmstead Website

## Project Overview
Marketing website for Down to Earth Farmstead, a local Iowa farm business specializing in farm-fresh products and food preservation services.

## Tech Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS v4 with custom brand colors
- **Component Library**: shadcn/ui (Radix UI based)
- **Content**: Markdown-based articles with frontmatter
- **Deployment**: Netlify (static export)
- **Package Manager**: npm

## Business Focus
- Farm fresh eggs (regular and freeze-dried)
- Custom freeze-drying services
- Educational content about food preservation
- Sustainable, long-lasting food solutions

## Project Structure
```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
├── lib/                 # Utility functions (markdown processing)
├── content/
│   └── articles/        # Markdown blog posts
└── assets/              # Images, logos, photos
```

## Content Strategy
- Homepage with farm introduction and mission
- Products catalog with pricing
- Services page for custom freeze-drying
- Educational blog articles about food preservation
- About/contact information

## Development Commands
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Deployment
- Configured for Netlify static hosting
- Automatic builds from git repository
- Static export enabled in next.config.ts

## Design Guidelines

### Component Development
- **ALWAYS check shadcn/ui first** before creating new components
- Available components: Button, Card, Badge, Input, Textarea, Select, Form, Label
- Install new shadcn components with: `npx shadcn@latest add [component-name]`

### Visual Design Principles
- **Flat Design**: Use borders instead of drop shadows
- **NO drop shadows** except for:
  - Modals and dialogs
  - Dropdown menus
  - Clearly elevated elements (popovers)
- **Borders**: Use subtle borders (`border-gray-200`) for separation
- **Clean backgrounds**: White and gray-50 for sections
- **High contrast text**: Follow CONTRAST_STRATEGY.md guidelines

### Brand Colors (Tailwind Config)
```css
primary: oklch(0.32 0.09 165.8)      /* #205248 forest green */
secondary: oklch(0.85 0.14 125.6)    /* #b1e565 light green */
contrast-high-light: #111827         /* For headings on light bg */
contrast-medium-light: #374151       /* For body text on light bg */
```

## Development Commands
```bash
npm run dev       # Start development server (with hot-reload fix for WSL)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Hot Reload Fix (WSL)
- Uses polling via `.env.local` settings
- Webpack watchOptions configured in `next.config.ts`
- If issues persist, clear `.next` folder and restart

## Key Features
- Responsive design optimized for mobile
- SEO-friendly structure
- Fast loading with static generation
- Markdown-based content management
- Local business focus with clean, modern aesthetic
- Accessible component system via shadcn/ui
- Consistent design language throughout