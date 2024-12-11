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
      </div>
    </div>
  );
}