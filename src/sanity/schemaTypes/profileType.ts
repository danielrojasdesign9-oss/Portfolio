import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Perfil Personal',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({ name: 'fullName', type: 'string', title: 'Nombre Completo' }),
    defineField({ name: 'role', type: 'string', title: 'Rol Actual' }),
    defineField({ name: 'tagline', type: 'text', title: 'Propuesta de Valor (Hero)' }),
    defineField({ name: 'bio', type: 'array', title: 'Biografía Principal', of: [{ type: 'block' }] }),
    defineField({ 
      name: 'skills', 
      type: 'array', 
      title: 'Habilidades', 
      of: [{ 
        type: 'object', 
        fields: [
          { name: 'category', type: 'string', title: 'Categoría (Ej: Tools, Soft Skills)' },
          { name: 'items', type: 'array', of: [{ type: 'string' }] }
        ]
      }] 
    }),
    defineField({ name: 'resumeUrl', type: 'file', title: 'CV para Descargar (PDF)' }),
    defineField({ 
      name: 'profileImage', 
      type: 'image', 
      title: 'Foto de Perfil',
      options: { hotspot: true }
    }),
  ]
})

