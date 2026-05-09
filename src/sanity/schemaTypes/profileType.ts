import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Perfil Personal',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'fullName',
      title: 'Nombre Completo',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Rol / Título Profesional',
      type: 'localeString',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline (Frase corta)',
      type: 'localeText',
    }),
    defineField({
      name: 'homeDescription',
      title: 'Descripción Home',
      type: 'localeText',
      description: 'Texto descriptivo que aparece en la pantalla principal.'
    }),
    defineField({
      name: 'bio',
      title: 'Biografía',
      type: 'localeContent',
    }),
    defineField({
      name: 'email',
      title: 'Email de Contacto',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({ name: 'resumeUrl', type: 'file', title: 'CV PDF' }),
    defineField({
      name: 'profileImage',
      type: 'image',
      title: 'Foto de Perfil',
      options: { hotspot: true }
    }),
  ]
})
