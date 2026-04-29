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
    defineField({ name: 'companyDescription', type: 'string', title: 'Descripción de la Empresa' }),
    defineField({ name: 'date', type: 'string', title: 'Fechas (Ej: Dec 2023 - PRESENT)' }),
    defineField({ name: 'position', type: 'string', title: 'Cargo' }),
    defineField({ name: 'positionDescription', type: 'text', title: 'Descripción del Cargo' }),
    defineField({ name: 'actions', type: 'array', title: 'Logros y Acciones (HTML o Rich Text)', of: [{ type: 'block' }] }),
    defineField({ name: 'link', type: 'url', title: 'Link a la Empresa' }),
    defineField({ name: 'image', type: 'image', title: 'Logo de la Empresa', options: { hotspot: true } }),
  ]
})
