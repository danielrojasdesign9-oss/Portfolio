import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { profileType } from './profileType'
import { experienceType } from './experienceType'
import { toolType } from './toolType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, profileType, experienceType, toolType],
}
