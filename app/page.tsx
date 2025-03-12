"use client"
import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import WordList from "@/components/word-list";
import { dictionaryData } from "@/data/dictionary";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const matches = dictionaryData
        .map((word) => word.word)
        .filter((word) => word.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 5);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const filteredWords = searchQuery
    ? dictionaryData.filter((word) =>
        word.word.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    : dictionaryData;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="container mx-auto px-6 py-12 flex flex-col items-center">
        <motion.h1 
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore the French Dictionary
        </motion.h1>
        <p className="text-lg text-center max-w-2xl mb-8">
          Find meanings, contexts, and appropriate usage of French words. Enhance your language skills effortlessly.
        </p>
        <div className="w-full max-w-xl">
          <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchChange} suggestions={suggestions} />
        </div>
        <div className="mt-8 w-full max-w-3xl">
          <WordList words={filteredWords} searchQuery={searchQuery} />
        </div>
      </div>
    </main>
  );
}
