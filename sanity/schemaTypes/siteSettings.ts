import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroVideo',
      title: 'Homepage hero video',
      description: 'Short video shown in the right side of the homepage hero. MP4, ideally 16:9, under 30MB.',
      type: 'file',
      options: { accept: 'video/*' },
    }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
