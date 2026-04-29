import { RobotIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const toolType = defineType({
  name: 'tool',
  title: 'Herramientas (Tools)',
  type: 'document',
  icon: RobotIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Nombre de la Herramienta' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'string', title: 'Descripción Corta' }),
    defineField({ name: 'link', type: 'url', title: 'Enlace' }),
    defineField({ name: 'image', type: 'image', title: 'Logo de la Herramienta', options: { hotspot: true } }),
  ]
})
