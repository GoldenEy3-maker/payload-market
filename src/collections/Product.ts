import type { CollectionConfig } from 'payload'

export const Product: CollectionConfig = {
  slug: 'product',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
    },
  ],
  labels: {
    singular: 'Продукт',
    plural: 'Продукты',
  },
}
