import { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services-block',
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
      name: 'services',
      label: 'Our Services',
      type: 'relationship',
      minRows: 1,
      maxRows: 4,
      relationTo: 'ourservices',
      hasMany: true,
    },
  ],
}
