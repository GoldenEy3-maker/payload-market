import type { CollectionConfig } from 'payload'

export const UsersCollectionConfig: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
  labels: {
    singular: 'Пользователь',
    plural: 'Пользователи',
  },
}
