import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.en' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'public',
      title: 'Public',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'localeString',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text (Resumen corto)',
      type: 'localeText',
    }),
    defineField({
      name: 'myRole',
      title: 'My Role',
      type: 'localeString',
    }),
    defineField({
      name: 'myGoal',
      title: 'My Goal',
      type: 'localeText',
    }),
    defineField({
      name: 'content',
      title: 'Project Core / Case Study (Detalle completo)',
      description: 'Aquí puedes explayarte sobre el proceso, retos, descubrimientos y resultados del proyecto.',
      type: 'localeContent',
    }),
    defineField({
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
