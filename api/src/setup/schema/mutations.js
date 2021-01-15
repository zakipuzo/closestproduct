// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
// App Imports
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as organisation from '../../modules/organisation/mutations'
import * as reservation from '../../modules/reservation/mutations'
import * as category from '../../modules/category/mutations' 
import * as organisationtype from '../../modules/organisationtype/mutations'
import * as localisation from '../../modules/localisation/mutations' 
// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: 'API Mutations [Create, Update, Delete]',

    fields: {
        ...user,
        ...product,
        ...reservation,
        ...organisation,
        ...category,
        ...organisationtype,
        ...localisation
    }
})

export default mutation