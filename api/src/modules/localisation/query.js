// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports 
import { getAll, getByUser, get } from './resolvers'
import { UserType } from '../user/types'
import LocalisationType from './types'

// Carts All
export const localisations = {
  type: new GraphQLList(LocalisationType),
  resolve: getAll
}
 

// Cart By id
export const localisation = {
  type: LocalisationType,
   args :{
       userId : {type: GraphQLInt}
   },
  resolve: getByUser
}

 