import { WrenchIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const toolType = defineType({
  name: 'tool',
  title: 'Herramientas',
  type: 'document',
  icon: WrenchIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Herramienta / Skill',
      description: 'Ej: Figma & Framer (Se mantiene igual en todos los idiomas)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría (Localizada)',
      description: 'Ej: Design Systems & Delivery',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.en',
      media: 'logo',
    },
  },
})
