// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports 
import { getAll, getByUser, get } from './resolvers'
import ReservationType from './types'

// Subscriptions All
export const reservations = {
  type: new GraphQLList(ReservationType),
  resolve: getAll
}

// Subscriptions by user
export const reservationsByUser = {
  type: new GraphQLList(ReservationType),
  resolve: getByUser
}

// Subscription By id
export const reservation = {
  type: ReservationType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}