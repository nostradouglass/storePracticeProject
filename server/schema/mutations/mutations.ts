import pkg from "@prisma/client";
const { PrismaClient } = pkg;
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
} from "graphql";
import UserType from '../types/UserType'

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
            password: password
          },
        });
      },
    },
    removeUser: {
        type: UserType,
        args: {
            id: { type: GraphQLInt}
        },
        resolve(parentValue, {id}) {
            return prisma.user.delete({
                where: {
                    id: id
                }
            })
        }
    }
  },
});

export default mutation;
