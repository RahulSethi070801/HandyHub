import React from 'react';
import { MapPin, Search, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-indigo-500 w-full">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-yellow-300">HANDY HUB</h1>
          <Link
            to="/admin"
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Settings size={20} />
            Admin Section
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
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
    </div>
  );
}