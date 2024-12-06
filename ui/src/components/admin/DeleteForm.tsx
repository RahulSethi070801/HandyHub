import React from 'react';

export default function DeleteForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle delete submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Handy Person ID</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Delete Handy Person
        </button>
      </div>
    </form>
  );
}