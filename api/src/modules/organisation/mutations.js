// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import CrateType from './types'
import { create, remove, update } from './resolvers'
import Organisationtype from '../../migrations/3-organisationtype'

// Crate create
export const organisationCreate = {
    type: Organ,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        },
        organisationTypeId: {
            name: 'organisationType',
            type: GraphQLInt
        }
    },
    resolve: create
}

// Crate update
export const organisationUpdate = {
    type: Organisationtype,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        },

        name: {
            name: 'name',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        },
        organisationTypeId: {
            name: 'organisationType',
            type: GraphQLInt
        }
    },
    resolve: update
}

// Crate remove
export const organisationRemove = {
    type: CrateType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}