import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";
import UserType from "./types/UserType";

import pkg from "@prisma/client";
import ProductType from "./types/ProductType";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLNonNull(GraphQLInt) } },
      resolve(parentValue, args) {
        return prisma.user.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLNonNull(GraphQLInt) } },
      resolve(parentValue, { id }) {
        return prisma.product.findUnique({
          where: {
            id: id,
          },
        });
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parentValue, args) {
        return prisma.product.findMany();
      },
    },
    searchProducts: {
      type: new GraphQLList(ProductType),
      args: { term: { type: GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { term }) {
        return prisma.product.findMany({
          where: {
            OR: [
              {
                title: {
                  search: term,
                },
              },
              {
                brand: {
                  search: term,
                },
              },
              {
                description: {
                  search: term,
                },
              },
            ],
          },
        });
      },
    },
  },
});

export default RootQuery;
