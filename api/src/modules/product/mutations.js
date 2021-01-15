// Imports
import { GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList } from 'graphql'

// App Imports
import { ProductType, CategoryForProductInputType } from './types'
// App Imports
import { ProductCategoryInputType } from '../productcategory/types'


import { create, update, remove, userNewProduct, userRemoveProduct, userUpdateProduct } from './resolvers'

// Product create
export const productCreate = {
    type: ProductType,
    args: {

        name: {
            name: 'name',
            type: GraphQLString
        },
        slug: {
            name: 'slug',
            type: GraphQLString
        },
        description: {
            name: 'description',
            type: GraphQLString
        }, 
        price: {
            name: 'price',
            type: GraphQLString
        },
        category: {
            name: 'category',
            type: GraphQLInt
        }, 

        transactionType: {
            name: 'transactionType',
            type: GraphQLInt
        },
        image: {
            name: 'image',
            type: GraphQLString
        },
        productImages: {
            name: 'productImages',
            type: GraphQLString
        }
    },
    resolve: create
}

// Product update
export const productUpdate = {
    type: ProductType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        },

        name: {
            name: 'name',
            type: GraphQLString
        },

        slug: {
            name: 'slug',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        },
        category: {
            name: 'category',
           type: GraphQLInt
        }, 
        price: {
            name: 'type',
            type: GraphQLString
        }, 

        transactionType: {
            name: 'transactionType',
            type: GraphQLInt
        },
        image: {
            name: 'image',
            type: GraphQLString
        },
        productImages: {
            name: 'productImages',
            type: GraphQLString
        }
    },
    resolve: update
}

// Product remove
export const productRemove = {
    type: ProductType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}

