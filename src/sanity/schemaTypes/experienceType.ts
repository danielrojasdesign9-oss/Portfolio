import { CaseIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { localeString } from './localeFields'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experiencia Laboral',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Empresa / Proyecto',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Logo / Imagen',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'year',
      title: 'Año / Periodo',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Rol / Cargo',
      type: 'localeString',
    }),
    defineField({
      name: 'link',
      title: 'Link (URL)',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Orden de visualización',
      description: 'Número menor = aparece primero. Ej: 1, 2, 3...',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
