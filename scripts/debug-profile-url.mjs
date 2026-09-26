import { createClient } from 'next-sanity'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: 'n0k6o0ax',
  dataset: 'production',
  apiVersion: '2024-04-29',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false
})

// Test the actual profileQuery
const profile = await client.fetch(`*[_type == "profile"][0] {
  fullName,
  "profileImageUrl": coalesce(
    profileImage.asset->url,
    photo.asset->url,
    profilePicture.asset->url,
    avatar.asset->url,
    picture.asset->url,
    fotoDePerfil.asset->url,
    fotoPerfil.asset->url,
    imagenPerfil.asset->url,
    profilePhoto.asset->url,
    profile_image.asset->url,
    fotoDePerfil.asset->url,
    fotoPerfil.asset->url,
    imagenPerfil.asset->url,
    imagenPerfil.asset->url,
    profilePhoto.asset->url,
    profile_image.asset->url
  )
}`)

console.log('Profile with URL:', JSON.stringify(profile, null, 2))