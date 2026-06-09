import { defineField, defineType } from 'sanity'

export const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({
      name: 'coverImage',
      title: 'Cover image (book cover or journal)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'externalUrl',
      title: 'External link',
      description: 'Link to paper on DOI, PubMed, journal website, etc.',
      type: 'url',
    }),
    defineField({
      name: 'downloadFile',
      title: 'Downloadable file',
      description: 'Upload a PDF or document. If both a link and file are added, the link takes priority.',
      type: 'file',
    }),
    defineField({ name: 'order', title: 'Sort order', type: 'number', description: 'Lower numbers appear first' }),
  ],
  orderings: [
    { title: 'Sort order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Year (newest first)', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'year', media: 'coverImage' },
  },
})
