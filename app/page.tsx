"use client"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "./components/Searchbar/page";

type Context = {
  context: string;
  meaning: string;
  examples?: string[];
  usage?: string[];
  note?: string;
  additional_examples?: string[];
};

type Word = { word: string; meaning: string; contexts: Context[] };

// Function to fetch all words
const fetchAllWords = async (): Promise<Word[]> => {
  const res = await fetch("/api/words");
  return res.json();
};

// Function to fetch a single word based on query
const fetchWord = async (query: string): Promise<Word> => {
  const res = await fetch(`/api/words?word=${query}`);
  return res.json();
};

export default function Home() {
  const { data: words = [] } = useQuery<Word[], Error>({
    queryKey: ["words"],
    queryFn: fetchAllWords
  });
  
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5">French Dictionary</h1>
      <SearchBar onSearch={(query) => {
        // Use fetchWord for search
        fetchWord(query)
          .then((result) => setSelectedWord(result))
          .catch((error) => {
            console.error("Word not found", error);
            setSelectedWord(null);
          });
      }} />
      {selectedWord && (
        <div className="mt-5 p-5 border rounded-lg shadow">
          <h2 className="text-xl font-semibold">{selectedWord.word}</h2>
          <p className="text-gray-600 italic">{selectedWord.meaning}</p>
          {selectedWord.contexts.map((context, index) => (
            <div key={index} className="mt-2">
              <p className="font-semibold">
                {context.context}: {context.meaning}
              </p>
              {context.examples && (
                <ul className="list-disc pl-5">
                  {context.examples.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
