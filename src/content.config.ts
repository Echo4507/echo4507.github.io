// 定義每種內容（筆記、作品、活動）開頭 frontmatter 可以填哪些欄位。
// 填錯格式時，執行 npm run dev 或 npm run build 會出現清楚的錯誤訊息。
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 學習筆記：src/content/notes/*.md
const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// 作品：src/content/projects/*.md
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tech: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    demo: z.string().url().optional(),
    repo: z.string().url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// 活動紀錄：src/content/activities/*.md
const activities = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    photos: z
      .array(z.object({ src: z.string(), alt: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, projects, activities };
