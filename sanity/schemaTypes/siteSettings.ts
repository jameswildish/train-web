import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Homepage hero background image',
      description: 'Full-bleed image behind the hero card. Dark overlay is applied automatically.',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
