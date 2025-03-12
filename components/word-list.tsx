import WordCard from "@/components/word-card"
import type { DictionaryWord } from "@/data/dictionary"
import { BookOpen } from "lucide-react"

interface WordListProps {
  words: DictionaryWord[]
  searchQuery: string
}

export default function WordList({ words, searchQuery }: WordListProps) {
  if (words.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
          <BookOpen className="h-8 w-8 text-slate-400" />
        </div>
        <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">No words found</h3>
        <p className="text-slate-500 dark:text-slate-400">
          No words starting with &quot;{searchQuery}&quot; were found in the dictionary.
        </p>
      </div>
    )
  }

  return (
    <div>
      {!searchQuery && (
        <div className="mb-6">
          <h2 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">Suggested Words</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-4">Browse these words or search for something specific</p>
        </div>
      )}

      {searchQuery && (
        <div className="mb-6">
          <h2 className="text-lg font-medium text-slate-700 dark:text-black mb-2">
            Words starting with &quot;{searchQuery}&quot;
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Found {words.length} word{words.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}

      <div>
        {words.map((word, index) => (
          <WordCard key={index} word={word} />
        ))}
      </div>
    </div>
  )
}

