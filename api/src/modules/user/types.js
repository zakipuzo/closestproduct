// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'
import { ProductType } from '../product/types'
import { SavedProductType } from '../savedproduct/types'

// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
   // password: { type: GraphQLString },
    role: { type: GraphQLString },
    sellProducts: { type: GraphQLList(ProductType) },
    buyProducts: { type: GraphQLList(ProductType) },
    savedProducts: { type: GraphQLList(SavedProductType) },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})
 

// User type
const ProfileType = new GraphQLObjectType({
  name: 'profile',
  description: 'profile type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }, 
  })
})
 
  

// User Login type
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { UserType, UserLoginType, UserGenderType, ProfileType }