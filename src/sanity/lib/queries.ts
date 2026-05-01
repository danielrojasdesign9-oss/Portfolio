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

// Obtener un solo proyecto detallado por slug, incluyendo navegación
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
    "previewImageUrl": previewImage.asset->url,
    "next": *[_type == "project" && public == true && ^.year <= year && _id != ^._id] | order(year asc)[0] {
      "slug": slug.current,
      title
    },
    "prev": *[_type == "project" && public == true && ^.year >= year && _id != ^._id] | order(year desc)[0] {
      "slug": slug.current,
      title
    }
  }
`

// Obtener el perfil personal
export const profileQuery = groq`
  *[_type == "profile"][0] {
    fullName,
    role,
    tagline,
    bio,
    skills,
    "resumeUrl": resumeUrl.asset->url,
    "profileImageUrl": profileImage.asset->url
  }
`


