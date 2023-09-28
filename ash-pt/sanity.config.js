import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes, blogPost} from './schemas'


export default defineConfig({
  name: 'default',
  title: 'Ash PT',

  projectId: 'e8ckavtm',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [...schemaTypes, blogPost],
  },
})


