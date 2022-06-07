import { gql } from '@apollo/client';


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

export const SINGLE_PRODUCT = gql`
query SINGLE_PRODUCT($id:Int) {
  product(id: $id) {
    title
      image
      imageAlt
      brand
      price
      description
      msrp
      countInStock
      rating
      numReviews
      favorite
      color
}
}
`

export const SEARCH_PRODUCTS = gql`
query SEARCH_PRODUCTS($term: String) {
  searchProducts(term: $term) {
  id
  title
  brand
  image
  imageAlt
  price
}
}
`