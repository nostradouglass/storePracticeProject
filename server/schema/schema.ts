const graphql = require("graphql");
const { GraphQLSchema } = graphql;
import RootQuery from "./rootQuery";
import mutation from "./mutations/mutations";

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});

// EXAMPLES

// mutation ADD_USER($firstName:String, $lastName: String, $email:String!, $isAdmin: Boolean, $password: String!){
//     addUser(firstName:$firstName, lastName:$lastName, email:$email, isAdmin:$isAdmin, password: $password) {
//       id
//       firstName
//       lastName
//       email
//       isAdmin
//     }
//   }

//   {
//     user(id:1) {
//       id
//       firstName
//       lastName
//     }
//   }
