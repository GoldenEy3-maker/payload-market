import type { CollectionConfig } from 'payload'

export const ProductsCollectionConfig: CollectionConfig = {
  slug: 'products',
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
