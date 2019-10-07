const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

// dummy data
var books = [
  { name: "name1", genre: "test", id: "1" },
  { name: "The name2", genre: "test2", id: "2" },
  { name: "name3", genre: "Sci-test3", id: "3" }
];

var Authors = [
  { name: "Authors", Age: 234, id: "1" },
  { name: "Authors2", Age: 345, id: "2" },
  { name: "Authors4", Age: 825, id: "3" }
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
