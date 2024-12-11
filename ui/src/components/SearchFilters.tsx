import React, {useState} from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchFiltersProps {
    onSearch: (keyword: string) => void; // Pass the search keyword to the parent component
}

// Modified parameters Prathyush
export default function SearchFilters({ onSearch }: SearchFiltersProps) {
    //Newly added Prathyush
    const [keyword, setKeyword] = useState('');

    // Newly added
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
      };
    const handleSearchClick = () => {
      if (keyword.trim() !== '') {
        onSearch(keyword); // Trigger the search when the user clicks the search button
      }
    };

  //Added new div at the end for keyword
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Optimized Search Here"
          className="w-full pl-10 pr-4 py-2 rounded-lg border shadow-sm"
          // Newly added
          value={keyword}
          onChange={handleInputChange}
        />
      </div>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <select className="pl-10 pr-8 py-2 rounded-lg appearance-none bg-white border shadow-sm">
          <option>Champaign, Illinois</option>
          <option>Chicago, Illinois</option>
          <option>Springfield, Illinois</option>
        </select>
      </div>
      <div className="flex justify-center sm:justify-start mt-4 sm:mt-0">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600"
                onClick={handleSearchClick}
              >
                Search
              </button>
      </div>
    </div>
  );
}