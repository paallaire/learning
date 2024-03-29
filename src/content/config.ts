import { z, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    desc: z.string().optional(),
    tags: z.array(z.string())
  }),
});

export const collections = {
  'articles': articleCollection,
};
