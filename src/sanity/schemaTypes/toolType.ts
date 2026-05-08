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
      title: 'Nombre de la Herramienta',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Diseño', value: 'Design' },
          { title: 'Producto', value: 'Product' },
          { title: 'IA', value: 'AI' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
