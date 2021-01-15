// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt , GraphQLInputObjectType} from 'graphql'

// App Imports
 
// Cart type
export const OrganisationTypeType = new GraphQLObjectType({
  name: 'OrganisationType Type',
  description: 'OrganisationType Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }, 
    description: { type: GraphQLString }, 
    organisationType: { type: OrganisationTypeType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})


 