import { defineType, defineField } from 'sanity'

const languages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'es', title: 'Spanish' },
  { id: 'jp', title: 'Japanese' }
]

export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fields: languages.map(lang => (
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'string',
    })
  ))
})

export const localeText = defineType({
  title: 'Localized text',
  name: 'localeText',
  type: 'object',
  fields: languages.map(lang => (
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'text',
    })
  ))
})

export const localeContent = defineType({
  title: 'Localized Content',
  name: 'localeContent',
  type: 'object',
  fields: languages.map(lang => (
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    })
  ))
})
