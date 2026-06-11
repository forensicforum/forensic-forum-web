import {defineField, defineType} from 'sanity'

export const resourceType = defineType({
  name: 'resource',
  title: 'Academic Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Resource Title',
      type: 'string',
      description: 'E.g., Structural Clarity Drills, Framework for Managed Commons',
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
      name: 'category',
      title: 'Resource Category',
      type: 'string',
      options: {
        list: [
          'Debater',
          'Adjudicator',
          'Public Speaking',
          'Coaching',
          'Institutional & Policy'
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author / Contributor',
      type: 'string',
      description: 'Who drafted this? (e.g., Forensic Forum Academic Team)',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'summary',
      title: 'Brief Summary',
      type: 'text',
      rows: 3,
      description: 'A quick overview to display on the main library grid.',
    }),
    defineField({
      name: 'content',
      title: 'Written Content (Optional)',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Use this if the resource is a readable web article.',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF Attachment (Optional)',
      type: 'file',
      options: { accept: '.pdf' },
      description: 'Upload a PDF if this is a large policy paper or official rulebook.',
    }),
  ],
})