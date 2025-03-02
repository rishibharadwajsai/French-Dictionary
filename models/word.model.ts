import mongoose from "mongoose";

const ContextSchema = new mongoose.Schema({
  context: String,
  meaning: String,
  examples: [String],
  usage: [String],
  note: String,
  additional_examples: [String],
});

const WordSchema = new mongoose.Schema({
  word: { type: String, required: true, unique: true },
  meaning: String,
  contexts: [ContextSchema], // Array of contexts
});

const Word = mongoose.models.Word || mongoose.model("Word", WordSchema);

export default Word;
