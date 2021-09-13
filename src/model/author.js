import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import { BookType } from "./book.js";
import { books } from "../fakeData.js";

export const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This represents a author of a book",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author) => {
        return books.filter((book) => book.authorId === author.id);
      },
    },
  }),
});
