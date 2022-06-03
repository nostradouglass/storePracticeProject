import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLFloat,
} from "graphql";

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLString },
    imageAlt: { type: GraphQLString },
    brand: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    msrp: { type: GraphQLFloat },
    countInStock: { type: GraphQLInt },
    rating: { type: GraphQLFloat },
    numReviews: { type: GraphQLInt },
    favorite: { type: GraphQLBoolean },
    color: { type: GraphQLString },
  }),
});

export default ProductType;
