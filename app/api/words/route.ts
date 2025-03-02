import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Word from "@/models/word.model";

export async function GET(req: Request) {
  await connectDB();

  // Extract search params
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("word");

  if (query) {
    // If exact word search
    const word = await Word.findOne({ word: query });
    if (word) {
      return NextResponse.json(word, { status: 200 });
    }

    // If partial search (for suggestions)
    const suggestions = await Word.find({ word: { $regex: `^${query}`, $options: "i" } })
      .limit(5) // Limit results to prevent overload
      .select("word"); // Only return word names for suggestions

    return NextResponse.json(suggestions, { status: 200 });
  }

  // Fetch all words if no query provided
  const words = await Word.find({});
  return NextResponse.json(words, { status: 200 });
}
