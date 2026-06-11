import {defineField, defineType} from 'sanity'

export const wikiType = defineType({
  name: 'wikiEntry',
  title: 'Wiki Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Entry Title',
      type: 'string',
      description: 'E.g., 2026 PAUDC Champions, History of GUDA',
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
      name: 'region',
      title: 'Wiki Region',
      type: 'string',
      options: {
        list: ['World Debate Wiki', 'African Debate Wiki', 'Ghana Debate Wiki'],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ghanaCategory',
      title: 'Ghana Wiki Subcategory',
      type: 'string',
      options: {
        list: ['History of BP Debate', 'Society Profiles', 'Champions & Honours'],
        layout: 'radio',
      },
      hidden: ({document}) => document?.region !== 'Ghana Debate Wiki',
    }),
    defineField({
      name: 'content',
      title: 'Wiki Content',
      type: 'array',
      // NEW: Added image and YouTube support so you can embed WUDC/PAUDC videos!
      of: [
        {type: 'block'}, 
        {type: 'image'},
        {
          type: 'object',
          name: 'youtube',
          title: 'YouTube Video',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube URL'
            }
          ]
        }
      ],
    }),
  ],
})