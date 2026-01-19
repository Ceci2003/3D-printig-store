# 3D Printing Store - Static Marketing Website

A modern, professional, and accessible static website for a 3D printing business built with Astro.

## Features

- ✅ Static site generation with Astro
- ✅ Content Collections for easy content management
- ✅ Tailwind CSS for styling
- ✅ Fully responsive (desktop + mobile)
- ✅ WCAG-friendly accessibility features
- ✅ Dual "How it works" flows (Products vs Services)
- ✅ Product catalog with filters and grid/list toggle
- ✅ Services pages (3D printing, Design, 3D scanning)
- ✅ Materials information page
- ✅ Projects gallery
- ✅ FAQ with accordion
- ✅ Contact form with Viber integration
- ✅ Quick Actions floating buttons (Call, Email, Viber)

## Tech Stack

- **Framework**: Astro (latest)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Content**: Astro Content Collections (JSON/Markdown)

## Project Structure

```
├── src/
│   ├── components/       # Reusable components
│   │   ├── Layout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── QuickActions.astro
│   │   ├── ProductCard.astro
│   │   ├── FiltersBar.astro
│   │   ├── Tabs.astro
│   │   ├── Steps.astro
│   │   └── Accordion.astro
│   ├── content/          # Content Collections
│   │   ├── site/        # Site settings
│   │   ├── categories/  # Product categories
│   │   ├── products/    # Product markdown files
│   │   ├── projects/    # Gallery projects
│   │   └── faq/         # FAQ items
│   ├── pages/           # Astro pages (routes)
│   └── styles/          # Global styles
├── public/              # Static assets
│   ├── images/          # Product/project images
│   └── favicon.svg
└── package.json
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview

```bash
npm run preview
```

## Content Management

### Site Settings

Edit `src/content/site/settings.json` to update:
- Site name and tagline
- Contact information (phone, email, Viber)
- Courier companies
- Payment options
- Social media links

### Categories

Edit `src/content/categories/categories.json` to:
- Add/remove categories
- Toggle visibility
- Set order
- Configure seasonal categories

### Products

Add product markdown files in `src/content/products/` with frontmatter:

```markdown
---
id: "product-slug"
title: "Product Name"
categoryId: "gifts"
price: 25
isCustomizable: true
featured: true
images:
  - src: "/images/products/product-slug/1.jpg"
    alt: "Product image"
shortDescription: "Short description"
---

Long description in markdown...
```

### Projects (Gallery)

Add project markdown files in `src/content/projects/`:

```markdown
---
slug: "project-slug"
title: "Project Name"
images:
  - src: "/images/projects/project-slug/1.jpg"
    alt: "Project image"
shortDescription: "Description"
material: "PLA"
tags: ["tag1", "tag2"]
date: 2024-01-15
---

Project details...
```

### FAQ

Add FAQ markdown files in `src/content/faq/`:

```markdown
---
question: "Your question?"
order: 1
---

Answer in markdown...
```

## Images

Place product images in `public/images/products/<product-slug>/`
Place project images in `public/images/projects/<project-slug>/`

## Pages

- `/` - Home page
- `/products` - Products catalog with filters
- `/products/[slug]` - Product detail page
- `/services` - Services overview
- `/services/materials` - Materials information
- `/services/gallery` - Projects gallery
- `/services/gallery/[slug]` - Project detail
- `/faq` - FAQ page
- `/about` - About page
- `/contacts` - Contact page
- `/delivery-payment` - Delivery and payment info
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Accessibility

The site includes:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Good color contrast
- Alt text for images

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)

## License

Private project - All rights reserved
