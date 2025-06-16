# Down to Earth Farmstead - Website Development Plan

## Project Overview
Marketing website for Down to Earth Farmstead, an Iowa-based farm specializing in farm-fresh products and food preservation services.

## Brand Identity

### Brand Colors (Extracted from Logo)
- **Primary Green**: `#b1e565` - Light green for nature/freshness
- **Dark Green**: `#205248` - Forest green for stability/trust  
- **Brown**: `#896a59` - Earthy brown for farm/soil connection
- **Dark Brown**: `#2b180d` - Rich earth tone for contrast
- **Accent Blue**: `#2ad8ff` - Light blue for freshness (gradient accent)

### Design Principles
- **Farm-to-table aesthetic** - Natural, organic, trustworthy
- **Clean and modern** - Professional yet approachable
- **Flat design** - Use borders, not drop shadows (except modals/dropdowns)
- **Photo-forward** - Showcase farm life in contained cards/sections
- **Mobile-first** - Rural customers often use mobile devices
- **Component-first** - Always check shadcn/ui before creating custom components

## Technical Architecture

### Page Structure
```
/                    # Home - Hero, featured products, recent articles
/about              # About - Farm story, mission, values
/products           # Products - Full catalog with pricing and photos
/articles           # Articles - Educational blog listing
/articles/[slug]    # Individual article pages
/contact            # Contact - Form, location, hours, services
```

### Component Architecture
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation with logo
│   │   ├── Footer.tsx       # Contact info, social links
│   │   └── Layout.tsx       # Page wrapper with consistent structure
│   ├── home/
│   │   ├── Hero.tsx         # Main banner with farm imagery
│   │   ├── FeaturedProducts.tsx # Key products showcase
│   │   └── RecentArticles.tsx   # Educational content preview
│   ├── products/
│   │   ├── ProductCard.tsx  # Individual product display
│   │   └── ProductGrid.tsx  # Product catalog layout
│   ├── articles/
│   │   ├── ArticleCard.tsx  # Blog post preview card
│   │   └── ArticleList.tsx  # Articles listing with filtering
│   └── ui/
│       └── (shadcn/ui components) # Button, Card, Badge, Form, etc.
```

## Content Strategy

### Home Page Goals
1. **Immediate Trust Building** - Farm photos, owner story
2. **Clear Value Proposition** - Fresh + preserved food solutions
3. **Educational Approach** - Why freeze-drying matters
4. **Easy Navigation** - Guide visitors to products or information
5. **Local Connection** - Iowa farm, community focus

### Product Categories & Pricing
1. **Fresh Farm Eggs** - $5/dozen
2. **Freeze-Dried Eggs** - $12/dozen (premium preservation)
3. **Custom Freeze-Drying Services** - $10 (bring your harvest)
4. **Seasonal Produce** - Variable pricing
5. **Preserved Goods** - Expanding inventory

### Content Themes
- **Educational**: Food preservation techniques and benefits
- **Seasonal**: Farm updates, harvest cycles, availability
- **Recipes**: Using preserved foods in daily cooking
- **Sustainability**: Long-term food security, reducing waste

## Asset Integration Strategy

### Available Assets
- **Logos**: 
  - `DtE-Color-Logo.svg` - Full horizontal logo for headers
  - `DtE-Color-Mark.svg` - Mark/icon version for favicons
- **Photography**: 14 authentic farm photos (April-June 2025)
  - Product shots (eggs, preservation equipment)
  - Farm lifestyle and process documentation
  - Owner/farm personality photos

### Usage Plan
- **Header**: Full logo with tagline
- **Hero Section**: Large farm photo as background
- **Products**: Specific product photography
- **About Page**: Owner and farm lifestyle photos
- **Process Pages**: Equipment and preservation process shots

## Development Phases

### Phase 1: Foundation ✅ COMPLETED
- [x] Layout components (Header, Footer, Layout) with brand colors
- [x] Homepage hero section with compelling farm imagery  
- [x] Basic navigation structure
- [x] Mobile-responsive base design
- [x] Brand color integration in Tailwind config
- [x] Logo integration and header optimization

### Phase 2: Core Content ✅ COMPLETED
- [x] Products page with photo gallery and pricing
- [x] About page with farm story and owner introduction
- [x] Contact page with location, hours, and service inquiry form
- [x] Integrate brand photography throughout
- [x] ProductCard and ProductGrid components
- [x] 6 products with detailed descriptions and pricing

**Recent Updates:**
- [x] Integrated shadcn/ui component library with farm branding
- [x] Implemented comprehensive text contrast strategy (CONTRAST_STRATEGY.md)
- [x] Redesigned homepage with clean, flat design (no text over images)
- [x] Added 6 new homepage sections using shadcn/ui components
- [x] Fixed hot-reload issues for WSL development
- [x] Established flat design principles (borders over shadows)

### Phase 3: Educational Content (Current)
- [x] Basic articles listing page structure
- [ ] Individual article rendering with rich content
- [ ] Educational content integration (existing freeze-drying articles)
- [ ] Related articles suggestions
- [ ] Search/filter functionality

### Phase 4: Optimization & Launch
- [ ] SEO optimization (local search, keywords)
- [ ] Performance optimization (image optimization, loading)
- [ ] Analytics integration (user behavior tracking)
- [ ] Netlify deployment and domain configuration
- [ ] Final testing and bug fixes

## Success Metrics
- **Primary**: Contact form submissions for custom services
- **Secondary**: Product inquiry engagement, article time-on-page
- **Long-term**: Local brand recognition, customer retention

## Technical Requirements
- **Framework**: Next.js 15 with TypeScript
- **Component Library**: shadcn/ui (copy-paste, Radix UI based)
- **Styling**: Tailwind CSS v4 with custom brand color palette
- **Design System**: Flat design, borders over shadows, high contrast
- **Content**: Markdown-based articles with frontmatter
- **Hosting**: Netlify static deployment
- **Performance**: Sub-3s load times, mobile-optimized
- **SEO**: Local business schema, meta optimization

## Component Development Guidelines
1. **Check shadcn/ui first**: `npx shadcn@latest add [component]`
2. **Use existing components**: Button, Card, Badge, Form, Input, etc.
3. **Maintain flat design**: Borders for separation, no drop shadows
4. **Follow contrast strategy**: Use contrast-* color utilities
5. **Test on mobile**: All components must be touch-friendly

---

**Ready to Begin Phase 1: Foundation Development**