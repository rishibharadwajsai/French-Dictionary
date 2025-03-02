import mongoose from "mongoose";
import dotenv from "dotenv";
import Word from "@/models/word.model";
import fs from "fs";
import path from "path";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "";

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, { dbName: "frenchDictionary" });

    // Read JSON file from absolute path
    const filePath = path.resolve(__dirname, "../french_words.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const words = JSON.parse(rawData);

    // Clear previous data
    await Word.deleteMany({});

    // Insert new data
    await Word.insertMany(words);
    console.log("✅ Database seeded successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
