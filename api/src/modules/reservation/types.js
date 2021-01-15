// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import CrateType from '../crate/types'
import { ProductType } from '../product/types'

// Reservation Type
const ReservationType = new GraphQLObjectType({
  name: 'reservation',
  description: 'Reservation Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    product: { type: ProductType },
    timestamp: {type: GraphQLString},
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ReservationType