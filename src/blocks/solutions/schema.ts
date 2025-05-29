import { Block } from 'payload'

export const OurSolutions: Block = {
  slug: 'servicesblock',
  labels: {
    singular: 'Services Block',
    plural: 'Services Blocks',
  },
  admin: {
    group: 'What We Offer Page',
  },
  fields: [
    {
      name: 'services',
      label: 'Our Services',
      type: 'relationship',
      relationTo: 'ourservices',
      hasMany: true,
    },
  ],
}
