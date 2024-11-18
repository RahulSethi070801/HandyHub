import React from 'react';
import { MapPin, Search } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-indigo-500 w-full">
      <h1 className="text-4xl font-bold text-yellow-300 text-center py-6">HANDY HUB</h1>
      <div className="max-w-6xl mx-auto pb-6 px-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Optimized Search Here"
            className="w-full pl-10 pr-4 py-2 rounded-lg"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <select className="pl-10 pr-8 py-2 rounded-lg appearance-none bg-white">
            <option>Champaign, Illinois</option>
          </select>
        </div>
      </div>
    </div>
  );
}