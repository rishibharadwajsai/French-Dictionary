"use client";
import { useState, useEffect } from "react";

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (!query) {
      setSuggestions([]); // Clear suggestions when input is empty
      return;
    }

    const fetchSuggestions = async () => {
      const res = await fetch(`/api/words?word=${query}`);
      const data = await res.json();
      setSuggestions(data.map((word: { word: string }) => word.word)); // Extract word names
    };

    const timeout = setTimeout(fetchSuggestions, 300); // Debounce API call
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="w-full max-w-lg mx-auto relative">
      <input
        type="text"
        className="w-full p-3 border rounded-lg shadow"
        placeholder="Search a verb..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border rounded shadow mt-1">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setQuery(suggestion);
                onSearch(suggestion); // Perform search
                setSuggestions([]); // Hide suggestions
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <button
        className="mt-2 w-full p-2 bg-blue-600 text-white rounded"
        onClick={() => onSearch(query)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
