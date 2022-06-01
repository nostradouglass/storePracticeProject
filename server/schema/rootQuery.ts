import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} from "graphql";
import UserType from "./types/UserType";

import pkg from "@prisma/client";
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
  },
});

export default RootQuery;
