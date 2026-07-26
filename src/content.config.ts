import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// Campos personalizados opcionales para guías de VentaSimple
				lastUpdated: z.union([z.string(), z.date()]).optional(),
				author: z.string().optional(),
			}),
		}),
	}),
};

