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
      title: 'My Goal / Meta',
      type: 'localeText',
    }),
    defineField({
      name: 'productVision',
      title: 'Product Vision (High Hierarchy)',
      type: 'localeText',
    }),
    defineField({
      name: 'framerEmbedUrl',
      title: 'Framer Embed URL (Canvas)',
      description: 'Pega aquí el enlace de compartido de tu canvas de Framer para incrustarlo.',
      type: 'url',
    }),
    defineField({
      name: 'content',
      title: 'Project Core / Case Study (Detalle completo)',
      description: 'Aquí puedes explayarte sobre el proceso, retos, descubrimientos y resultados del proyecto.',
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
              name: 'image',
              title: 'Imagen',
              type: 'image',
              options: { hotspot: true },
            },
          ],
          preview: {
            select: {
              title: 'titleEn',
              media: 'image',
            },
            prepare({ title, media }: { title?: string; media?: any }) {
              return {
                title: title || 'Untitled slide',
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
