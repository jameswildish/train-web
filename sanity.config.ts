import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { mediaPlugin } from 'sanity-plugin-media'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
    mediaPlugin(),
  ],
})
