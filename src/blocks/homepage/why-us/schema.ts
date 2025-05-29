import { Block } from 'payload'

export const WhyChooseUs: Block = {
  slug: 'why-choose-us', // Unique identifier for the block
  admin: {
    group: 'HomePage',
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },

    {
      name: 'why_us_photo',
      label: 'Section Photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
