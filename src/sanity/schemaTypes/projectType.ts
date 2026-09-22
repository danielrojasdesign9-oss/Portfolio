import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType, defineArrayMember } from 'sanity'
import { localeString } from './localeFields'

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
      name: 'subtitle',
      title: 'Subtitle / Tagline',
      type: 'localeString',
    }),
    defineField({
      name: 'scope',
      title: 'Scope',
      type: 'localeText',
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'localeString',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'localeString',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishDate',
      title: 'Fecha de publicación',
      description: 'Para orden cronológico preciso y SEO',
      type: 'date',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      description: 'Título para buscadores (máx. 60 chars)',
      type: 'localeString',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      description: 'Descripción para buscadores (máx. 160 chars)',
      type: 'localeText',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      description: 'Imagen para compartir en redes sociales (1200x630px)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'technologies',
      title: 'Tecnologías / Herramientas',
      description: 'Herramientas usadas en este proyecto (referencia a tools)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tool' }] }],
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
    // Gallery — multiple slides with localized title/subtitle/description + images
    defineField({
      name: 'gallery',
      title: 'Galería de Slides',
      description: 'Añade diapositivas al caso de estudio. Cada slide tiene título subtítulo y descripción localizados + imágenes.',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Slide',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'localeString',
            },
            {
              name: 'subtitle',
              title: 'Subtítulo',
              type: 'localeString',
            },
            {
              name: 'description',
              title: 'Descripción',
              type: 'localeText',
            },
            {
              name: 'images',
              title: 'Galería de imágenes',
              description: '¡Arroja aquí todas tus fotos de una vez! Aparecerán en una cuadrícula.',
              type: 'array',
              options: {
                layout: 'grid'
              },
              of: [
                defineArrayMember({
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    { name: 'caption', title: 'Caption', type: 'localeText' },
                  ]
                })
              ],
            },
          ],
          preview: {
            select: {
              title: 'title.en',
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
