import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';


const kompra1 = defineCollection({
  loader: glob({ pattern: ["**/*.mdx", "**/*.md"], base: "./src/content/kompra1"}),
});
const organisieren = defineCollection({
  loader: glob({ pattern: ["**/*.mdx", "**/*.md"], base: "./src/content/organisieren"}),
});
const einbindung = defineCollection({
  loader: glob({ pattern: ["**/*.mdx", "**/*.md"], base: "./src/content/einbindung"}),
});
const feedback = defineCollection({
  loader: glob({ pattern: ["**/*.mdx", "**/*.md"], base: "./src/content/feedback"}),
});

export const collections = { kompra1, organisieren, einbindung, feedback };