import { defineField, defineType } from 'sanity'

export const collaborator = defineType({
  name: 'collaborator',
  title: 'Collaborator',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Institution / Organisation name', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })],
    }),
    defineField({ name: 'website', title: 'Website URL', type: 'url' }),
    defineField({ name: 'order', title: 'Sort order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
})
