import { defineField, defineType } from 'sanity'

export const collaborator = defineType({
  name: 'collaborator',
  title: 'Collaborator',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Institution / Organisation name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'type', title: 'Type', type: 'string',
      options: { list: ['Academic', 'Clinical', 'Industry', 'Charity', 'Government'] } }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'website', title: 'Website URL', type: 'url' }),
    defineField({ name: 'order', title: 'Sort order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'type', media: 'logo' },
  },
})
