// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { ru } from '@payloadcms/translations/languages/ru'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { UsersCollectionConfig } from '@/entities/users'
import { MediaCollectionConfig } from '@/entities/media'
import { ProductsCollectionConfig } from '@/entities/products'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    dateFormat: 'dd.MM.yyyy HH:mm:ss',
    user: UsersCollectionConfig.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [UsersCollectionConfig, MediaCollectionConfig, ProductsCollectionConfig],
  i18n: {
    supportedLanguages: {
      ru,
    },
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'app/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
