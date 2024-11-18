import React from 'react';
import { Search, MapPin } from 'lucide-react';

export default function SearchFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Optimized Search Here"
          className="w-full pl-10 pr-4 py-2 rounded-lg border shadow-sm"
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
    </div>
  );
}