import { defineField, defineType } from 'sanity'

export const educationArticle = defineType({
  name: 'educationArticle',
  title: 'Education Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: r => r.required(),
    }),
    defineField({
      name: 'pillars',
      title: 'Pillar pages',
      description: 'Which health pillar pages this article appears on.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Activity', value: 'activity' },
          { title: 'Sleep', value: 'sleep' },
          { title: 'Mental Health', value: 'mental-health' },
          { title: 'Nutrition', value: 'nutrition' },
        ],
        layout: 'grid',
      },
      validation: r => r.required().min(1),
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      description: 'Lower numbers appear first within a pillar page.',
      type: 'number',
      initialValue: 10,
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Short summary shown on the pillar page card (2–3 sentences).',
      type: 'text',
      rows: 3,
      validation: r => r.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'readTime',
      title: 'Read time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
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
              { title: 'Superscript', value: 'sup' },
            ],
          },
        },
        { type: 'image', options: { hotspot: true } },
        { type: 'file', title: 'Video', options: { accept: 'video/*' } },
      ],
    }),
  ],
  orderings: [
    { title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Published date, new first', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', pillars: 'pillars', media: 'mainImage' },
    prepare({ title, pillars, media }) {
      const labels = (pillars ?? []).join(', ')
      return { title, subtitle: labels || 'No pillar assigned', media }
    },
  },
})
