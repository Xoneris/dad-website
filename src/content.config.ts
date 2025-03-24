import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';


const kompra1 = defineCollection({
  loader: glob({ pattern: ["**/*.mdx", "**/*.md"], base: "./src/content/kompra1"}),
});

export const collections = { kompra1 };