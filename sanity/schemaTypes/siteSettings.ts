import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'heroVideo', title: 'Hero video' },
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
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
