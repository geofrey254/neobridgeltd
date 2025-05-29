import { Block } from 'payload'

export const OurSolutions: Block = {
  slug: 'solutionblock',
  admin: {
    group: 'Solutions Page',
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
