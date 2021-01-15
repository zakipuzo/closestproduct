// Imports
import { GraphQLInt, GraphQLList } from '../organisation/node_modules/graphql'

// App Imports
 
import { getAll } from './resolvers'
import { OrganisationTypeType, TransactionTypeType } from './types'

// Subscriptions All
export const organisationTypes = {
    type: new GraphQLList(OrganisationTypeType),
    resolve: getAll
}

