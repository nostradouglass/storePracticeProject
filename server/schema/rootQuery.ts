import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";
import UserType from "./types/UserType";
import bcrypt from 'bcryptjs'

import pkg from "@prisma/client";
import ProductType from "./types/ProductType";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    login: {
      type: UserType,
      args: { email: { type: GraphQLNonNull(GraphQLString)}, password: { type: GraphQLNonNull(GraphQLString)}},
      async resolve(parentValue, args) {
        let user = await prisma.user.findUnique({
          where: {
            email: args.email
          }
        })
        if (bcrypt.compareSync(args.password, user!.password)) {
          return user
        }
        throw new Error("Login error")
      }

    },
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
