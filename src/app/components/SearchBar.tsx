"use client";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="hidden sm:flex items-center gap-1 rounded-md ring-1 ring-gray-200  px-2  py-1 shadow-md ">
      <Search className="w-4 h-4 text-gray-500" />

      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="text-sm  outline-0"
      />
    </div>
  );
};

export default SearchBar;
