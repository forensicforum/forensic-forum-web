import {defineField, defineType} from 'sanity'

export const thoughtCafeType = defineType({
  name: 'thoughtCafe',
  title: 'ThoughtCafe Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Column / Category',
      type: 'string',
      options: {
        list: ['Pol!', 'Clarity!', 'Order in the House!', 'Equity!', 'The Convo'],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'summary',
      title: 'Article Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Written Content (Optional)',
      type: 'array',
      of: [
        {type: 'block'}, 
        {type: 'image'},
        // NEW: Custom YouTube Video Object
        {
          type: 'object',
          name: 'youtube',
          title: 'YouTube Video',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube URL',
              description: 'Paste the full YouTube video link here.'
            }
          ]
        }
      ],
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF Document (Optional)',
      type: 'file',
      options: { accept: '.pdf' },
    }),
  ],
})