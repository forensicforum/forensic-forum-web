import { type SchemaTypeDefinition } from 'sanity'
import { newsType } from './newsType'
import { eventType } from './eventType'
import { resourceType } from './resourceType'
import { thoughtCafeType } from './thoughtCafeType'
import { wikiType } from './wikiType'
import inquiry from './inquiry' 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsType, eventType, resourceType, thoughtCafeType, wikiType, inquiry],
}