# File Tree Summary

## Project Structure

```
3D-printig-store/
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md
├── FILE_TREE.md
├── tailwind.config.mjs
├── tsconfig.json
│
├── public/
│   ├── favicon.svg
│   └── images/
│       └── .gitkeep
│
└── src/
    ├── env.d.ts
    ├── styles/
    │   └── global.css
    │
    ├── components/
    │   ├── Accordion.astro
    │   ├── FiltersBar.astro
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── Layout.astro
    │   ├── ProductCard.astro
    │   ├── QuickActions.astro
    │   ├── SectionTitle.astro
    │   ├── Steps.astro
    │   └── Tabs.astro
    │
    ├── content/
    │   ├── config.ts
    │   │
    │   ├── site/
    │   │   └── settings.json
    │   │
    │   ├── categories/
    │   │   └── categories.json
    │   │
    │   ├── products/
    │   │   ├── product-1.md
    │   │   ├── product-2.md
    │   │   ├── product-3.md
    │   │   ├── product-4.md
    │   │   ├── product-5.md
    │   │   ├── product-6.md
    │   │   ├── product-7.md
    │   │   └── product-8.md
    │   │
    │   ├── projects/
    │   │   ├── project-1.md
    │   │   ├── project-2.md
    │   │   ├── project-3.md
    │   │   ├── project-4.md
    │   │   ├── project-5.md
    │   │   └── project-6.md
    │   │
    │   └── faq/
    │       ├── faq-1.md
    │       ├── faq-2.md
    │       ├── faq-3.md
    │       ├── faq-4.md
    │       ├── faq-5.md
    │       ├── faq-6.md
    │       ├── faq-7.md
    │       └── faq-8.md
    │
    └── pages/
        ├── index.astro (Home)
        ├── about.astro
        ├── contacts.astro
        ├── delivery-payment.astro
        ├── faq.astro
        ├── privacy.astro
        ├── terms.astro
        │
        ├── products/
        │   ├── index.astro
        │   └── [slug].astro
        │
        └── services/
            ├── index.astro
            ├── materials.astro
            └── gallery/
                ├── index.astro
                └── [slug].astro
```

## Routes

- `/` - Home page
- `/products` - Products catalog
- `/products/[slug]` - Product detail
- `/services` - Services overview
- `/services/materials` - Materials info
- `/services/gallery` - Projects gallery
- `/services/gallery/[slug]` - Project detail
- `/faq` - FAQ page
- `/about` - About page
- `/contacts` - Contact page
- `/delivery-payment` - Delivery & payment
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Key Features Implemented

✅ Static site generation with Astro
✅ Content Collections (settings, categories, products, projects, FAQ)
✅ Tailwind CSS styling
✅ Responsive design (mobile + desktop)
✅ Accessibility features (ARIA, keyboard nav, focus states)
✅ Dual "How it works" flows (Products vs Services)
✅ Product catalog with filters and grid/list toggle
✅ Category visibility control
✅ Seasonal category support
✅ Quick Actions (Call, Email, Viber)
✅ Contact form with product prefill
✅ FAQ accordion
✅ Projects gallery
✅ Materials information page

