// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, Gra } from 'graphql'

// App Imports
import { UserType } from '../user/types' 
import {CartItemType} from '../cartitems/types'

// Cart type
const LocalisationType = new GraphQLObjectType({
  name: 'cart',
  description: 'Cart Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },  
    name: { type: GraphQLString },
    adresse: { type: GraphQLString },
    longitude: { type: GraphQLFloat },
    latitude: { type: GraphQLFloat },
    type: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default LocalisationType