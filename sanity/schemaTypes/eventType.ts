import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Circuit Event',
  type: 'document',
  fields: [
    // 1. Basic Info
    defineField({
      name: 'title',
      title: 'Event Name',
      type: 'string',
      description: 'E.g., Ghana Novices Debate Championship, Novice Transition Academy',
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
      name: 'coverImage',
      title: 'Promotional Flyer / Cover Image',
      type: 'image',
      options: { 
        hotspot: true // This allows you to crop the image directly inside the dashboard
      },
      description: 'Upload the official promotional graphic for this event.',
    }),
    defineField({
      name: 'category',
      title: 'Event Category',
      type: 'string',
      options: {
        list: ['Standard Tournament', 'Training Academy', 'Masterclass'],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    
    // 2. Logistics & Dates
    defineField({
      name: 'venue',
      title: 'Venue Details',
      type: 'string',
      description: 'E.g., Online via Zoom/Discord, or specific in-person campus locations.',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date & Time',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date & Time',
      type: 'datetime',
      description: 'Leave blank if it is a single-session event.',
    }),

    // 3. Rules & Requirements
    defineField({
      name: 'format',
      title: 'Debate/Event Format',
      type: 'string',
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility Rules',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'feeAndPayment',
      title: 'Participation Fee & Payment Info',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Include costs and mobile money/bank details here.',
    }),

    // 4. Personnel
    defineField({
      name: 'caPanel',
      title: 'Chief Adjudication Panel / Facilitators',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Add the names of the panel members or masterclass leads.',
    }),

    // 5. Schedule Details
    defineField({
      name: 'schedule',
      title: 'Schedule Breakdown',
      type: 'array',
      of: [{type: 'block'}],
    }),

    // 6. Registration & Archiving Logic
    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: ['Upcoming / Registering', 'Ongoing', 'Completed / Archived'],
        layout: 'radio',
      },
      initialValue: 'Upcoming / Registering',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Google Forms Registration URL',
      type: 'url',
      hidden: ({document}) => document?.status === 'Completed / Archived', 
    }),
    defineField({
      name: 'postEventReport',
      title: 'Archive Outcomes & Report',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => document?.status !== 'Completed / Archived',
      description: 'Write the outcomes, winners, and post-event story here.',
    }),
  ],
})