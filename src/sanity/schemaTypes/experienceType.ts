import { CaseIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experiencia Laboral',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Empresa / Proyecto',
      type: 'string',
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
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link (URL)',
      type: 'url',
    }),
  ],
})
