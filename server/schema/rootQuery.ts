import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} from "graphql";
import UserType from "./types/UserType";

import pkg from "@prisma/client";
import ProductType from "./types/ProductType";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // users: {
    //     type: new GraphQLList(UserType),
    //     resolve() {
    //         return prisma.user.findMany()
    //     }
    // },
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return prisma.user.findUnique({
          where: {
            id: args.id
          },
        });
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parentValue, args) {
        return prisma.product.findMany()
      }
    }
  },
});

export default RootQuery;
