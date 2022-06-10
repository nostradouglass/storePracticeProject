import { Register } from "./components/Register";

export interface Product {
    id: number;
    title: string;
    image: string;
    imageAlt: string;
    brand: string;
    description: string;
    price: number;
    msrp: number;
    countInStock: number;
    rating: number;
    numReviews: number;
    favorite: boolean;
    color: string;
  }


  export enum ColorTypes {
    DARK,
    LIGHT
}

export enum RegisterSignInType {
  REGISTER,
  SIGNIN
}