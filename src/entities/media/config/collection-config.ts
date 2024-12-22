import type { CollectionConfig } from 'payload'

export const MediaCollectionConfig: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
  labels: {
    singular: 'Медиа',
    plural: 'Медиа',
  },
}
