const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Concept {
    category: String
    term: String
    description: String
    code: String
    }

    type Category {
      name: String
      description: String
      concepts: [Concept]
    }

    type Query {
      getConceptsByCategory(category: String!): [Concept]
      getConceptByTerm(term: String!): Concept
      getAllConcepts: [Concept]
      searchConceptsByDescription(keyword: String!): [Concept]
    getAllCategories: [Category]
    getCategoryByName(name: String!): Category
  }
`);

module.exports = schema;
