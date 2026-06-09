import { defineField, defineType } from 'sanity'

export const department = defineType({
  name: 'department',
  title: 'Team Department',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'order', title: 'Display order', type: 'number', initialValue: 99 }),
  ],
  orderings: [
    { title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title' },
  },
})
