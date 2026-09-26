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

const profile = await client.fetch(`*[_type == "profile"][0] {
  _id,
  profileImage,
  photo,
  profilePicture,
  avatar,
  picture,
  fotoDePerfil,
  fotoPerfil,
  imagenPerfil,
  profilePhoto,
  profile_image,
  fullName
}`)

console.log('Profile:', JSON.stringify(profile, null, 2))