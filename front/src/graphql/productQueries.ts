import { gql } from '@apollo/client'


export const GET_ALL_PRODUCTS = gql`
{
    products {
      id
      title
      image
      imageAlt
      brand
      description
      price
      msrp
      countInStock
      rating
      numReviews
      favorite
      color
    }
  }
`