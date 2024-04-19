import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {Card, Text} from '@sanity/ui'
import {DashboardIcon} from '@sanity/icons'
import { schemaTypes } from './sanity-settings/schemas'


export default defineConfig({
  name: 'default',
  title: 'AllyPT',
  projectId: 'e8ckavtm',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})