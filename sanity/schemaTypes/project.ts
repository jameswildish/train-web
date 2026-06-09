import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity' },
    { name: 'overview', title: 'Overview' },
    { name: 'why', title: 'Why this matters' },
    { name: 'work', title: 'What we do' },
    { name: 'impact', title: 'Impact' },
    { name: 'facts', title: 'Key facts' },
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
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', validation: r => r.required(), group: 'identity' }),
    defineField({ name: 'mainImage', title: 'Hero image', type: 'image', options: { hotspot: true }, group: 'identity' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['Active', 'Recruiting', 'Completed', 'Upcoming'] },
      group: 'identity',
    }),
    defineField({ name: 'launchedAt', title: 'Project launched', type: 'string', description: 'e.g. 2023', group: 'identity' }),
    defineField({ name: 'featured', title: 'Featured on homepage', type: 'boolean', initialValue: false, group: 'identity' }),
    defineField({ name: 'order', title: 'Sort order', type: 'number', description: 'Lower numbers appear first', group: 'identity' }),

    // ─── Overview ────────────────────────────────────────────────────
    defineField({ name: 'overviewHeading', title: 'Heading', description: 'What is this project?', type: 'string', group: 'overview' }),
    defineField({ name: 'overviewBody', title: 'Body text', description: 'Use a blank line between paragraphs', type: 'text', rows: 5, group: 'overview' }),
    defineField({ name: 'missionStatement', title: 'Our mission (aside pull-quote)', type: 'text', rows: 3, group: 'overview' }),

    // ─── Why this matters ────────────────────────────────────────────
    defineField({ name: 'whyHeading', title: 'Heading', description: 'Why this matters', type: 'string', group: 'why' }),
    defineField({ name: 'whyBody', title: 'Body text', description: 'Use a blank line between paragraphs', type: 'text', rows: 5, group: 'why' }),

    // ─── What we do ──────────────────────────────────────────────────
    defineField({ name: 'whatWeDoHeading', title: 'Heading', description: 'What we do', type: 'string', group: 'work' }),
    defineField({ name: 'whatWeDoItems', title: 'Bullet points', type: 'array', of: [{ type: 'string' }], group: 'work' }),
    defineField({ name: 'scienceHeading', title: 'Scientific foundation heading', description: 'Scientific foundation', type: 'string', group: 'work' }),
    defineField({ name: 'scienceBody', title: 'Scientific foundation text', description: 'Use a blank line between paragraphs', type: 'text', rows: 4, group: 'work' }),

    // ─── Impact ──────────────────────────────────────────────────────
    defineField({ name: 'impactHeading', title: 'Heading', description: 'e.g. "Who benefits — and how."', type: 'string', group: 'impact' }),
    defineField({
      name: 'impactCells',
      title: 'Impact cells',
      type: 'array',
      group: 'impact',
      of: [{
        type: 'object',
        fields: [
          { name: 'tag', title: 'Tag label', description: 'e.g. 01 — For individuals', type: 'string' },
          { name: 'heading', title: 'Heading', type: 'string' },
          { name: 'body', title: 'Body text', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'heading', subtitle: 'tag' } },
      }],
    }),

    // ─── Key facts ───────────────────────────────────────────────────
    defineField({
      name: 'stats',
      title: 'Key facts',
      type: 'array',
      group: 'facts',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', description: 'e.g. 10,000+', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'category.title', media: 'mainImage' },
  },
})
