import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Independent Builders"),
    readingTime: z.string().default("5 min read"),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    
  }),
});

export const collections = { blog };