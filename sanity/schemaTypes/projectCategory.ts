import { defineField, defineType } from 'sanity'

export const projectCategory = defineType({
  name: 'projectCategory',
  title: 'Project Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'order', title: 'Sort order', type: 'number', description: 'Lower numbers appear first' }),
  ],
  preview: {
    select: { title: 'title' },
  },
})
