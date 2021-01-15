// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList, GraphQLInputObjectType, GraphQLBoolean } from '../organisation/node_modules/graphql'
import { CategoryType } from '../category/types'
import { ProductCategoryType } from '../productcategory/types'
import { ProductImageType } from '../productimage/types'
import { TransactionTypeType } from '../organisationtype/types'
import { UserType, ProfileType } from '../user/types'
// Product type
const ProductType = new GraphQLObjectType({
    name: 'product',
    description: 'Product Type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        slug: { type: GraphQLString }, 
        price: { type: GraphQLFloat }, 
        description: { type: GraphQLString },
        user: { type: UserType }, 
        productImages : { type : GraphQLList(ProductImageType)},
        image: { type: GraphQLString }, 
        category: { type: CategoryType}, 
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },

    })
})

 
export { ProductType }