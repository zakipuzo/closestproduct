// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'
import { OrganisationTypeType } from '../transactiontype/types'

// Crates All
export const organisations = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID
export const organisationById = {
  type: OrganisationTypeType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
