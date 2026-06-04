import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Research Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'tag', title: 'Tag', type: 'string',
      options: { list: ['Data infrastructure', 'Genomics', 'Clinical', 'Patient experience', 'Wellbeing', 'Community', 'Performance'] } }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'status', title: 'Status', type: 'string',
      options: { list: ['Active', 'Recruiting', 'Completed', 'Upcoming'] } }),
    defineField({ name: 'featured', title: 'Featured on homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'body', title: 'Body content', type: 'array', of: [
      { type: 'block' },
      { type: 'image', options: { hotspot: true } },
    ] }),
    defineField({ name: 'stats', title: 'Stats', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ],
    }] }),
    defineField({ name: 'teamMembers', title: 'Team members', type: 'array', of: [{ type: 'reference', to: [{ type: 'teamMember' }] }] }),
    defineField({ name: 'order', title: 'Sort order', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag', media: 'mainImage' },
  },
})
