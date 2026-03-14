import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const profile = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    email: z.string(),
    website: z.string(),
    degree: z.string(),
    university: z.string(),
    summary: z.string(),
    social: z.object({
      github: z.string(),
      linkedin: z.string(),
    }),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string(),
    type: z.string(),
    order: z.number(),
    categories: z.record(z.string(), z.array(z.string())),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    displayName: z.string(),
    category: z.enum(['tool', 'proj', 'game']),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().nullable(),
    liveUrl: z.string().nullable(),
    order: z.number(),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/skills' }),
  schema: z.object({
    categories: z.record(z.string(), z.array(z.object({
      name: z.string(),
      level: z.number().min(0).max(100),
    }))),
  }),
});

const recommendations = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/recommendations' }),
  schema: z.object({
    author: z.string(),
    title: z.string(),
    text: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  profile,
  experience,
  projects,
  skills,
  recommendations,
};
