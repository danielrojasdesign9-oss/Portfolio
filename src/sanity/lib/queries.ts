import { groq } from 'next-sanity'

// Obtener todos los proyectos para el home page
export const projectsQuery = groq`
  *[_type == "project" && public == true] | order(year desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    "imageUrl": mainImage.asset->url
  }
`

// Obtener un solo proyecto detallado por slug
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    title,
    category,
    client,
    year,
    introText,
    myRole,
    myGoal,
    location,
    content,
    "mainImageUrl": mainImage.asset->url,
    "previewImageUrl": previewImage.asset->url
  }
`
