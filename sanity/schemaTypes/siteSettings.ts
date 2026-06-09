import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site title', type: 'string' }),
    defineField({ name: 'description', title: 'Site description', type: 'text', rows: 2 }),
    defineField({ name: 'ogImage', title: 'Default OG / share image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'favicon', title: 'Favicon', type: 'image' }),
  ],
  preview: {
    select: { title: 'title' },
    prepare: () => ({ title: 'Site Settings' }),
  },
})
