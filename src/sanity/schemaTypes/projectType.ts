import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType, defineArrayMember } from 'sanity'

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
      title: 'My Goal / Meta',
      type: 'localeText',
    }),
    defineField({
      name: 'productVision',
      title: 'Product Vision (High Hierarchy)',
      type: 'localeText',
    }),
    defineField({
      name: 'figmaEmbedUrl',
      title: 'Figma Prototype URL',
      description: 'Pega aquí el enlace de compartido de tu prototipo de Figma (Embed link) para mostrarlo.',
      type: 'url',
    }),
    defineField({
      name: 'content',
      title: 'Project Core / Case Study',
      description: 'Detalle completo del proceso, retos y resultados.',
      type: 'localeContent',
    }),
    defineField({
      name: 'previewImage',
      title: 'Preview Image (Thumbnail)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image (Hero)',
      type: 'image',
      options: { hotspot: true },
    }),
    // NEW: Gallery — multiple slides with title per language + image
    defineField({
      name: 'gallery',
      title: 'Galería de Slides',
      description: 'Añade diapositivas al caso de estudio. Cada slide tiene título en cada idioma y su propia imagen.',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Slide',
          fields: [
            {
              name: 'titleEn',
              title: 'Título (EN)',
              type: 'string',
            },
            {
              name: 'titleEs',
              title: 'Título (ES)',
              type: 'string',
            },
            {
              name: 'titleJp',
              title: 'Título (JP)',
              type: 'string',
            },
            {
              name: 'subtitleEn',
              title: 'Subtítulo (EN)',
              type: 'string',
            },
            {
              name: 'subtitleEs',
              title: 'Subtítulo (ES)',
              type: 'string',
            },
            {
              name: 'subtitleJp',
              title: 'Subtítulo (JP)',
              type: 'string',
            },
            {
              name: 'descriptionEn',
              title: 'Descripción (EN)',
              type: 'text',
              rows: 3,
            },
            {
              name: 'descriptionEs',
              title: 'Descripción (ES)',
              type: 'text',
              rows: 3,
            },
            {
              name: 'descriptionJp',
              title: 'Descripción (JP)',
              type: 'text',
              rows: 3,
            },
            {
              name: 'images',
              title: 'Galería de imágenes',
              description: '¡Arroja aquí todas tus fotos de una vez! Aparecerán en una cuadrícula. Haz clic en el icono de edición de cada una para añadir su descripción.',
              type: 'array',
              options: {
                layout: 'grid'
              },
              of: [
                defineArrayMember({
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    { name: 'captionEn', title: 'Descripción (EN)', type: 'text', rows: 2 },
                    { name: 'captionEs', title: 'Descripción (ES)', type: 'text', rows: 2 },
                    { name: 'captionJp', title: 'Descripción (JP)', type: 'text', rows: 2 },
                  ]
                })
              ],
            },
          ],
          preview: {
            select: {
              title: 'titleEn',
              media: 'images.0',
            },
            prepare({ title, media }: { title?: string; media?: any }) {
              return {
                title: title || 'Untitled section',
                media,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      category: 'category.en',
      media: 'previewImage',
    },
    prepare({ title, category, media }: { title?: string; category?: string; media?: any }) {
      return {
        title: title || 'Untitled Project',
        subtitle: category || 'No category',
        media,
      }
    },
  },
})
