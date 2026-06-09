import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Research Project',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity' },
    { name: 'overview', title: 'Overview' },
    { name: 'team', title: 'Team' },
  ],
  fields: [
    // ─── Identity ────────────────────────────────────────────────────
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required(), group: 'identity' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required(), group: 'identity' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'projectCategory' }],
      group: 'identity',
    }),
    defineField({ name: 'tagline', title: 'Tagline (hero subtitle)', type: 'string', group: 'identity' }),
    defineField({ name: 'summary', title: 'Short summary (card & SEO)', type: 'text', rows: 3, validation: r => r.required(), group: 'identity' }),
    defineField({ name: 'mainImage', title: 'Hero image', type: 'image', options: { hotspot: true }, group: 'identity' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['Active', 'Recruiting', 'Completed', 'Upcoming'] },
      group: 'identity',
    }),
    defineField({ name: 'featured', title: 'Featured on homepage', type: 'boolean', initialValue: false, group: 'identity' }),
    defineField({ name: 'order', title: 'Sort order', type: 'number', description: 'Lower numbers appear first', group: 'identity' }),

    // ─── Overview ────────────────────────────────────────────────────
    defineField({ name: 'overviewBody', title: 'What is this project?', description: 'Use a blank line between paragraphs', type: 'text', rows: 5, group: 'overview' }),
    defineField({ name: 'missionStatement', title: 'Our mission (aside pull-quote)', type: 'text', rows: 3, group: 'overview' }),

    // ─── Team ────────────────────────────────────────────────────────
    defineField({
      name: 'teamMembers',
      title: 'Team members',
      type: 'array',
      group: 'team',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'category.title', media: 'mainImage' },
  },
})
