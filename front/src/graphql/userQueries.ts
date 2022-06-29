import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
query LOGIN_USER($email: String!, $password:String!) {
  login(email: $email, password: $password) {
    id
    firstName
    lastName
    email
    isAdmin
  }
}
  `