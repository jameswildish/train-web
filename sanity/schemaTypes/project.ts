import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Research Project',
  type: 'document',
  fields: [
    // ─── Core identity ──────────────────────────────────────────────
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({
      name: 'tag',
      title: 'Category tag',
      type: 'string',
      options: { list: ['Data infrastructure', 'Genomics', 'Clinical', 'Patient experience', 'Wellbeing', 'Community', 'Performance'] },
    }),
    defineField({ name: 'year', title: 'Year', type: 'string', placeholder: 'e.g. 2026' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'summary', title: 'Short summary (card & overview)', type: 'text', rows: 3, validation: r => r.required() }),
    defineField({ name: 'mainImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['Active', 'Recruiting', 'Completed', 'Upcoming'] },
    }),
    defineField({ name: 'featured', title: 'Featured on homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Sort order', type: 'number' }),

    // ─── Flexible body sections ──────────────────────────────────────
    defineField({
      name: 'body',
      title: 'Page content',
      description: 'Build the project page with flexible sections.',
      type: 'array',
      of: [
        // Rich text block
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
        // Image
        { type: 'image', options: { hotspot: true } },
        // Custom: Section heading with optional intro text
        {
          type: 'object',
          name: 'sectionHeading',
          title: 'Section heading',
          fields: [
            { name: 'eyebrow', title: 'Eyebrow label', type: 'string' },
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'body', title: 'Intro text', type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
        },
        // Custom: Bullet list block
        {
          type: 'object',
          name: 'bulletList',
          title: 'Bullet list',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'items', title: 'Items', type: 'array', of: [{ type: 'string' }] },
          ],
          preview: { select: { title: 'heading' } },
        },
        // Custom: Impact grid (up to 4 cells)
        {
          type: 'object',
          name: 'impactGrid',
          title: 'Impact grid',
          fields: [
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'heading', title: 'Heading', type: 'string' },
            {
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'tag', title: 'Tag (e.g. 01 — For individuals)', type: 'string' },
                  { name: 'heading', title: 'Heading', type: 'string' },
                  { name: 'body', title: 'Body text', type: 'text', rows: 2 },
                ],
                preview: { select: { title: 'heading' } },
              }],
            },
          ],
          preview: { select: { title: 'heading' } },
        },
        // Custom: Two-column layout
        {
          type: 'object',
          name: 'twoColumn',
          title: 'Two-column section',
          fields: [
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'heading', title: 'Left heading', type: 'string' },
            { name: 'leftBody', title: 'Left text', type: 'text', rows: 4 },
            { name: 'rightEyebrow', title: 'Right eyebrow', type: 'string' },
            { name: 'rightHeading', title: 'Right heading / pull quote', type: 'text', rows: 3 },
            { name: 'rightBody', title: 'Right body text', type: 'text', rows: 4 },
          ],
          preview: { select: { title: 'heading' } },
        },
      ],
    }),

    // ─── Stats strip ─────────────────────────────────────────────────
    defineField({
      name: 'stats',
      title: 'Key facts / stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value (e.g. 10,000+)', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    }),

    // ─── Badges ──────────────────────────────────────────────────────
    defineField({
      name: 'badges',
      title: 'Hero badges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "TARGet Research Group", "Translational", "Peer-reviewed"',
    }),

    // ─── Team ────────────────────────────────────────────────────────
    defineField({
      name: 'teamMembers',
      title: 'Team members',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'tag', media: 'mainImage' },
  },
})
