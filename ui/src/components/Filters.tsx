import React from 'react';

export default function Filters() {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h2 className="font-semibold mb-4 flex items-center justify-between">
          Customer Rating
          <span className="text-gray-400">▼</span>
        </h2>
        {[4, 3, 2, 1].map((rating) => (
          <label key={rating} className="flex items-center mb-2">
            <input type="radio" name="rating" className="mr-2" />
            <span className="flex-1">{'★'.repeat(rating)}{'☆'.repeat(5-rating)} & up</span>
            <span className="text-gray-500">{20 + rating * 5}</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-4 flex items-center justify-between">
          Price
          <span className="text-gray-400">▼</span>
        </h2>
        <input
          type="range"
          min="0"
          max="160"
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>$0</span>
          <span>$80</span>
          <span>$160+</span>
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-4 flex items-center justify-between">
          Service
          <span className="text-gray-400">▼</span>
        </h2>
        {[
          { name: 'Plumbing', count: 9 },
          { name: 'Electrician', count: 4 },
          { name: 'Mechanic', count: 5 },
          { name: 'Security Guard', count: 3 }
        ].map((service) => (
          <label key={service.name} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="flex-1">{service.name}</span>
            <span className="text-gray-500">{service.count}</span>
          </label>
        ))}
        <button className="text-sm text-indigo-600 mt-2">Show More</button>
      </div>
    </div>
  );
}