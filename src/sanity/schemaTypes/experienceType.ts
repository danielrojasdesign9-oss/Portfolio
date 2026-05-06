import { CaseIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experiencia Laboral',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({ name: 'companyName', type: 'string', title: 'Empresa' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'companyName' } }),
    defineField({ name: 'companyDescription', type: 'localeString', title: 'Descripción de la Empresa' }),
    defineField({ name: 'date', type: 'string', title: 'Fechas (Ej: Dec 2023 - PRESENT)' }),
    defineField({ name: 'position', type: 'localeString', title: 'Cargo' }),
    defineField({ name: 'positionDescription', type: 'localeText', title: 'Descripción del Cargo' }),
    defineField({ name: 'actions', type: 'localeContent', title: 'Logros y Acciones' }),
    defineField({ name: 'link', type: 'url', title: 'Link a la Empresa' }),
    defineField({ name: 'image', type: 'image', title: 'Logo de la Empresa', options: { hotspot: true } }),
  ]
})
