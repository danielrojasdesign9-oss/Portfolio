import { groq } from 'next-sanity'

// Obtener todos los proyectos para el home page
export const projectsQuery = groq`
  *[_type == "project" && public == true] | order(year desc) {
    _id,
    title,
    category,
    "slug": slug.current,
    "imageUrl": previewImage.asset->url
  }
`

// Obtener un solo proyecto detallado por slug, incluyendo navegación
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    category,
    year,
    client,
    location,
    introText,
    myRole,
    myGoal,
    content,
    "mainImageUrl": mainImage.asset->url,
    "previewImageUrl": previewImage.asset->url,
    "nextProject": *[_type == "project" && _createdAt > ^._createdAt] | order(_createdAt asc) [0] {
      "slug": slug.current,
      title,
      "imageUrl": previewImage.asset->url
    },
    "prevProject": *[_type == "project" && _createdAt < ^._createdAt] | order(_createdAt desc) [0] {
      "slug": slug.current,
      title,
      "imageUrl": previewImage.asset->url
    }
  }
`

// Obtener el perfil personal
export const profileQuery = groq`*[_type == "profile"][0] {
    fullName,
    role,
    tagline,
    bio,
    skills,
    "resumeUrl": resumeFile.asset->url,
    "profileImageUrl": profileImage.asset->url
  }
`
