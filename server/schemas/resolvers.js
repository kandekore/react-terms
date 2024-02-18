const Concept = require("../models/conceptModel");
const Category = require("../models/categoryModel"); 

const resolvers = {
  Query: {
    getCategoryByName: async (_, { name }) => {
      try {
        const category = await Category.findOne({ name }).populate('concepts');
        return category;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch category');
      }
    },
    getConceptsByCategory: async (_, { category }) => {
      try {
        const concepts = await Concept.find({ category });
        return concepts;
      } catch (error) {
        console.error(error);
        return null; 
      }
    },

    getConceptByTerm: async (_, { term }) => {
      try {
        const concept = await Concept.findOne({ term });
        return concept;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    getAllConcepts: async () => {
      try {
        const concepts = await Concept.find({});
        return concepts;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    searchConceptsByDescription: async (_, { keyword }) => {
      return await Concept.find({
        $or: [
          { term: { $regex: keyword, $options: "i" } },
         { category: { $regex: keyword, $options: "i" } },
          //  { code: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } }
        ]
      });
    },
    getAllCategories: async () => {
      try {
        const categories = await Category.find().populate('concepts');
        return categories;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  }
};

module.exports = resolvers;
