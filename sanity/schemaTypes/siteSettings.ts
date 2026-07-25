import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'heroVideo', title: 'Hero video' },
    { name: 'education', title: 'Education intros' },
  ],
  fields: [
    defineField({
      name: 'heroVideo',
      title: 'Video file',
      description: 'MP4, under 30MB.',
      type: 'file',
      options: { accept: 'video/*' },
      group: 'heroVideo',
    }),
    defineField({
      name: 'heroVideoPoster',
      title: 'Poster image',
      description: 'Thumbnail shown before the video plays.',
      type: 'image',
      options: { hotspot: true },
      group: 'heroVideo',
    }),
    defineField({
      name: 'heroVideoLabel',
      title: 'Label',
      description: 'Small tag above the title e.g. "Featured"',
      type: 'string',
      initialValue: 'Featured',
      group: 'heroVideo',
    }),
    defineField({
      name: 'heroVideoTitle',
      title: 'Title',
      description: 'Short title shown on the video card.',
      type: 'string',
      group: 'heroVideo',
    }),
    defineField({
      name: 'heroVideoCtaText',
      title: 'View more button text',
      description: 'Leave blank to hide the button.',
      type: 'string',
      group: 'heroVideo',
    }),
    defineField({
      name: 'heroVideoCtaHref',
      title: 'View more button link',
      description: 'e.g. /blog/my-post or https://...',
      type: 'string',
      group: 'heroVideo',
    }),
    defineField({
      name: 'educationIntros',
      title: 'Education section introductions',
      description: 'Intro title and text shown above the education cards on each pillar page.',
      type: 'array',
      group: 'education',
      of: [{
        type: 'object',
        name: 'pillarIntro',
        fields: [
          defineField({
            name: 'pillar',
            title: 'Pillar page',
            type: 'string',
            options: {
              list: [
                { title: 'Activity', value: 'activity' },
                { title: 'Sleep', value: 'sleep' },
                { title: 'Mental Health', value: 'mental-health' },
                { title: 'Nutrition', value: 'nutrition' },
              ],
            },
            validation: r => r.required(),
          }),
          defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
          defineField({ name: 'body', title: 'Introduction text', type: 'text', rows: 5 }),
        ],
        preview: {
          select: { pillar: 'pillar', title: 'title' },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          prepare(value: any) {
            return { title: value.title ?? 'Untitled', subtitle: value.pillar }
          },
        },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
