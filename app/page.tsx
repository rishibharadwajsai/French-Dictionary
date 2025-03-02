"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import SearchBar from "@/components/search-bar"
import WordList from "@/components/word-list"
import { dictionaryData } from "@/data/dictionary"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter words based on search query
  const filteredWords = searchQuery
    ? dictionaryData.filter((word) => word.word.toLowerCase().startsWith(searchQuery.toLowerCase()))
    : dictionaryData

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6 text-slate-800 dark:text-slate-100">French Dictionary</h1>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <WordList words={filteredWords} searchQuery={searchQuery} />
        </div>
      </div>
    </main>
  )
}

