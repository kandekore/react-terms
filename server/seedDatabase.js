require('dotenv').config();

const mongoose = require("mongoose");
const fs = require("fs").promises;
const path = require("path");
const Concept = require("./models/conceptModel"); 
const Category = require("./models/categoryModel");
//const mongoURI = process.env.MONGODB_URI;
const mongoURI = "mongodb://127.0.0.1/reactconcepts";

async function seedDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB...");

    const data = await fs.readFile(path.join(__dirname, "seeds", "terms.json"), "utf8");
    const json = JSON.parse(data);
    const categoriesData = json.categories;

    await Concept.deleteMany({});
    await Category.deleteMany({});

    for (const categoryData of categoriesData) {
      // Create and save the category
      const category = new Category({
        name: categoryData.name,
        description: categoryData.description,
      });

      // Create concepts linked to this category
      const concepts = categoryData.concepts.map(concept => ({
        ...concept,
        category: category.name, // Link concept to category by name
      }));

      // Insert the concepts and update the category with concept IDs
      const savedConcepts = await Concept.insertMany(concepts);
      const conceptIds = savedConcepts.map(concept => concept._id);

      // Update category with concept IDs
      category.concepts = conceptIds;
      await category.save();
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Failed to seed database:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
