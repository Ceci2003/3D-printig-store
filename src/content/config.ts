import { defineCollection, z } from 'astro:content';

const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    siteName: z.string(),
    brandTagline: z.string().optional(),
    contactPhone: z.string(),
    contactPhone2: z.string().optional(),
    contactPhones: z.array(z.object({
      label: z.string().optional(),
      number: z.string(),
    })).optional(),
    contactEmail: z.string(),
    address: z.string().optional(),
    viberNumber: z.string(),
    viberNumber2: z.string().optional(),
    viberContacts: z.array(z.object({
      label: z.string().optional(),
      number: z.string(),
    })).optional(),
    social: z.object({
      facebook: z.string().optional(),
      instagram: z.string().optional(),
    }).optional(),
    couriers: z.array(z.string()),
    defaultCurrency: z.string().default('BGN'),
    turnaroundText: z.string().default('Обикновено 1–3 дни'),
    paymentOptions: z.array(z.string()),
  }),
});

const categoriesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    categories: z.array(z.object({
      id: z.string(),
      title: z.string(),
      description: z.string().optional(),
      visible: z.boolean().default(true),
      order: z.number().default(0),
      icon: z.string().optional(),
      type: z.enum(['regular', 'seasonal']).default('regular'),
      seasonalConfig: z.object({
        activeSeasons: z.array(z.enum(['christmas', 'valentine', 'easter'])),
      }).optional(),
    })),
  }),
});

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    categoryId: z.string(),
    tags: z.array(z.string()).default([]),
    price: z.number().optional(),
    priceFrom: z.number().optional(),
    isCustomizable: z.boolean().default(false),
    featured: z.boolean().default(false),
    isNew: z.boolean().default(false),
    status: z.enum(['active', 'draft']).default('active'),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })),
    shortDescription: z.string(),
    materials: z.array(z.string()).optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })),
    shortDescription: z.string(),
    material: z.string().optional(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  'site': settingsCollection,
  'categories': categoriesCollection,
  'products': productsCollection,
  'projects': projectsCollection,
  'faq': faqCollection,
};

