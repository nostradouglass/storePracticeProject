
const graphql = require('graphql')
const { GraphQLString, GraphQLInt, GraphQLSchema } = graphql
const { GraphQLObjectType } = graphql
const _ = require('lodash')
const UserType = require("./types/UserType")
import RootQuery from './rootQuery'
import mutation from './mutations/mutations'

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})