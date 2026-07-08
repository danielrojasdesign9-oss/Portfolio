import { DocumentsIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const resourceType = defineType({
  name: 'resource',
  title: 'Recurso',
  type: 'document',
  icon: DocumentsIcon,
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
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Research', value: 'research' },
          { title: 'DesignOps', value: 'designops' },
          { title: 'Producto', value: 'producto' },
          { title: 'Liderazgo', value: 'liderazgo' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'GRATIS (Free)', value: 'free' },
          { title: 'KIT (Paid)', value: 'kit' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'aiCompatibility',
      title: 'AI Compatibility',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Claude (Anthropic)', value: 'claude' },
          { title: 'ChatGPT (OpenAI)', value: 'chatgpt' },
          { title: 'Gemini (Google)', value: 'gemini' },
        ],
      },
    }),
    defineField({
      name: 'link',
      title: 'Resource Link',
      type: 'url',
    }),
    defineField({
      name: 'previewImage',
      title: 'Preview Image (Icon)',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      category: 'category',
      type: 'type',
    },
    prepare({ title, category, type }: { title?: string; category?: string; type?: string }) {
      return {
        title: title || 'Untitled Resource',
        subtitle: [category, type].filter(Boolean).join(' — '),
      }
    },
  },
})
