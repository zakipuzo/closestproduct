// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/query'
import * as product from '../../modules/product/query'
import * as organisation from '../../modules/organisation/query'
import * as reservation from '../../modules/reservation/query'
import * as category from '../../modules/category/query' 
import * as organisationtype from '../../modules/organisationtype/query'
import * as localisation from '../../modules/localisation/query' 

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries [Read]',

    fields: () => ({
        ...user,
        ...product,
        ...reservation,
        ...organisation,
        ...category,
        ...organisationtype,
        ...localisation
    })
})

export default query