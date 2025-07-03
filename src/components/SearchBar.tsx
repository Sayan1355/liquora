
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for any alcohol (e.g., Whiskey, Wine, Vodka...)"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-sm border border-amber-500/30 rounded-2xl text-white placeholder-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400 w-6 h-6" />
      </div>
    </div>
  );
};

export default SearchBar;
