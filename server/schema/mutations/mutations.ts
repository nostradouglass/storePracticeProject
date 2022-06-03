import pkg from "@prisma/client";
const { PrismaClient } = pkg;
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLFloat,
} from "graphql";
import ProductType from "../types/ProductType";
import UserType from "../types/UserType";

const prisma = new PrismaClient();

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: new GraphQLNonNull(GraphQLString) },
        isAdmin: { type: GraphQLBoolean },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { firstName, lastName, email, isAdmin, password }) {
        return prisma.user.create({
          data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            isAdmin: isAdmin,
            password: password,
          },
        });
      },
    },
    removeUser: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parentValue, { id }) {
        return prisma.user.delete({
          where: {
            id: id,
          },
        });
      },
    },
    addProduct: {
      type: ProductType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLString },
        imageAlt: { type: GraphQLString },
        brand: { type: GraphQLBoolean },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        msrp: { type: GraphQLFloat },
        countInStock: { type: GraphQLInt },
        rating: { type: GraphQLFloat },
        numReviews: { type: GraphQLInt },
        favorite: { type: GraphQLBoolean },
        color: { type: GraphQLString },
      },

      resolve(
        parentValue,
        {
          title,
          image,
          imageAlt,
          brand,
          description,
          price,
          msrp,
          countInStock,
          rating,
          numReviews,
          favorite,
          color,
        }
      ) {
        return prisma.product.create({
          data: {
            title: title,
            image: image,
            imageAlt: imageAlt,
            brand: brand,
            description: description,
            price: price,
            msrp: msrp,
            countInStock: countInStock,
            rating: rating,
            numReviews: numReviews,
            favorite: favorite,
            color: color,
          },
        });
      },
    },
  },
});

export default mutation;
