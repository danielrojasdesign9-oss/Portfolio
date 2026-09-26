import { groq } from 'next-sanity'

// Obtener todos los proyectos para el home page
export const projectsQuery = groq`
  *[_type == "project" && public == true] | order(coalesce(publishDate, year) desc) {
    _id,
    title,
    category,
    year,
    "slug": slug.current,
    "imageUrl": previewImage.asset->url
  }
`

// Obtener un solo proyecto detallado por slug, incluyendo navegación infinita
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    category,
    public,
    year,
    client,
    location,
    publishDate,
    seoTitle,
    seoDescription,
    introText,
    myRole,
    myGoal,
    productVision,
    figmaEmbedUrl,
    content,
    technologies[] {
      name,
      category,
      "imageUrl": logo.asset->url
    },
    gallery[] {
      title,
      subtitle,
      description,
      images[] {
        ...,
        "url": asset->url,
        caption
      }
    },
    "mainImageUrl": mainImage.asset->url,
    "previewImageUrl": previewImage.asset->url,
    "ogImageUrl": ogImage.asset->url,
    "nextProject": coalesce(
      *[_type == "project" && _createdAt > ^._createdAt] | order(_createdAt asc) [0],
      *[_type == "project"] | order(_createdAt asc) [0]
    ) {
      "slug": slug.current,
      title,
      "imageUrl": previewImage.asset->url
    },
    "prevProject": coalesce(
      *[_type == "project" && _createdAt < ^._createdAt] | order(_createdAt desc) [0],
      *[_type == "project"] | order(_createdAt desc) [0]
    ) {
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
    homeDescription,
    bio,
    email,
    linkedinUrl,
    seoTitle,
    seoDescription,
    hobbies[] {
      "name": name,
      "iconUrl": icon.asset->url
    },
    "resumeUrl": resumeUrl.asset->url,
    "profileImageUrl": coalesce(profileImage.asset->url, photo.asset->url, profilePicture.asset->url, avatar.asset->url, picture.asset->url)
  }
`

// Obtener todas las experiencias laborales
export const experienceQuery = groq`*[_type == "experience"] | order(order asc, year desc) {
    name,
    year,
    role,
    link,
    "imageUrl": image.asset->url
  }
`

// Obtener todas las herramientas
export const toolsQuery = groq`*[_type == "tool"] | order(name asc) {
    name,
    category,
    "imageUrl": logo.asset->url
  }
`

// Obtener todos los recursos (prompts/kits)
export const resourcesQuery = groq`*[_type == "resource"] | order(title.en asc) {
    _id,
    title,
    description,
    category,
    type,
    aiCompatibility,
    link,
    "slug": slug.current,
    "previewImageUrl": previewImage.asset->url
  }
`
