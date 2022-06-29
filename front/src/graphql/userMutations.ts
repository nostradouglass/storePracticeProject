import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation ADD_USER($firstName:String, $lastName: String, $email:String!, $isAdmin: Boolean, $password: String!){
    addUser(firstName:$firstName, lastName:$lastName, email:$email, isAdmin:$isAdmin, password: $password) {
      id
      firstName
      lastName
      email
      isAdmin
    }
  }
  `