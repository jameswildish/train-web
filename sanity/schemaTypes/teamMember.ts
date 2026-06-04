import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'role', title: 'Role / Title', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'department',
      title: 'Department (for filtering)',
      type: 'string',
      validation: r => r.required(),
      options: {
        list: [
          { title: 'Founders', value: 'Founders' },
          { title: 'Surgeons', value: 'Surgeons' },
          { title: 'Researchers', value: 'Researchers' },
          { title: 'Postdocs & Fellows', value: 'Postdocs' },
          { title: 'Data & AI', value: 'Technology' },
          { title: 'Clinical staff', value: 'Clinical' },
          { title: 'Advisory', value: 'Advisory' },
        ],
      },
    }),
    defineField({ name: 'isFounder', title: 'Show "Founder" badge', type: 'boolean', initialValue: false }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 4 }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'twitter', title: 'X (Twitter) URL', type: 'url' }),
    defineField({ name: 'email', title: 'Email address', type: 'string' }),
    defineField({ name: 'publications', title: 'Publications URL (e.g. Google Scholar)', type: 'url' }),
    defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'order', title: 'Sort order', type: 'number', description: 'Lower numbers appear first' }),
  ],
  orderings: [
    { title: 'Sort order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'image' },
  },
})
