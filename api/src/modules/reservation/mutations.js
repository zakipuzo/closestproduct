// Imports
import { GraphQLInt } from '../organisation/node_modules/graphql'

// App Imports 
import { create, remove } from './resolvers'
import ReservationType from './types'

// Reservation create
export const reservationCreate = {
  type: ReservationType,
  args: {
    productId: {
      name: 'productId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Reservation remove
export const reservationRemove = {
  type: ReservationType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}