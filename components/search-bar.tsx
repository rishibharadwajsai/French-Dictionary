import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  suggestions: string[];
}

export default function SearchBar({ searchQuery, setSearchQuery, suggestions }: SearchBarProps) {
  return (
    <div className="relative mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search for a word..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 py-6 text-lg rounded-lg border-slate-200 dark:border-slate-700 shadow-sm"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
          >
            <X className="h-5 w-5 text-slate-400" />
          </Button>
        )}
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute left-0 w-full mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
              onClick={() => setSearchQuery(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
