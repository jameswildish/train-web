import { defineField, defineType } from 'sanity'

export const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'authors', title: 'Authors', type: 'string', description: 'e.g. Grewal N, van der Meulen J, et al.' }),
    defineField({ name: 'journal', title: 'Journal / Publisher', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Category tag',
      type: 'string',
      options: {
        list: [
          'Genomics', 'Clinical', 'Population', 'Review', 'Multi-centre',
          'Equity', 'Histopathology', 'Risk factors', 'Clinical trial',
          'Patient experience', 'Sex differences', 'Outcomes', 'Hemodynamics',
          'Prevention', 'Data Science',
        ],
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image (book cover or journal)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract / Short description',
      type: 'text',
      rows: 3,
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
    defineField({ name: 'featured', title: 'Featured on science page', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Sort order', type: 'number', description: 'Lower numbers appear first' }),
  ],
  orderings: [
    { title: 'Sort order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Year (newest first)', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'authors', media: 'coverImage' },
  },
})
