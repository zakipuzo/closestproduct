// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import CartType from './types'
import { userUpdateLocalisation } from './resolvers'
import { CategoryInputType } from '../category/types'
import { CartItemType } from '../cartitems/types'
import LocalisationType from './types'

// cart create
export const updateLocalisation = {
  type: LocalisationType,
  args: {
    longitude: {
      name: 'longitude',
      type: GraphQLInt
    },
    latitude: {
      name: 'latitude',
      type: GraphQLInt
    },
    adresse: {
      name: 'adresse',
      type: GraphQLString
    },
    name: {
      name: 'name',
      type: GraphQLString
    },
  },
  resolve: userUpdateLocalisation
}

 

