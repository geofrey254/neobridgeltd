import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Services: CollectionConfig = {
  slug: 'ourservices',
  admin: {
    useAsTitle: 'title',
    description: 'Add Service',
    group: 'Services',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug (Do not touch)',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return slugify(value, { lower: true, strict: true })
            if (data?.title) return slugify(data.title, { lower: true, strict: true })
            return value
          },
        ],
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
    },
  ],
}

export default Services
