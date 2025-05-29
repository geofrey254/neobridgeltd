import { Block } from 'payload'

export const ModularServices: Block = {
  slug: 'modularblock',
  labels: {
    singular: 'Modular Services Block',
    plural: 'Modular Services Blocks',
  },
  admin: {
    group: 'Our Services Page',
  },
  fields: [
    {
      name: 'modularservices',
      label: 'Our Modular Services',
      type: 'relationship',
      relationTo: 'modularservices',
      hasMany: true,
    },
  ],
}
