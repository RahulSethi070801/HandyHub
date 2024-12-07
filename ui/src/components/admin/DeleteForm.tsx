import React, {useState} from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

export const handyPersonApi = {
  delete: async (id: number): Promise<void> => {
    await api.delete(`/deleteHandyPerson/${id}`);
  }
};

export default function DeleteForm() {
  const [handyPersonId, setHandyPersonId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   setIsLoading(true);
   try {
     await handyPersonApi.delete(Number(handyPersonId));
     setHandyPersonId('');
   }catch (error) {
     console.log(error instanceof Error ? error.message : 'An error occurred');
   }finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Handy Person ID</label>
        <input
          type="number"
          value={handyPersonId}
          onChange={(e) => setHandyPersonId(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            isLoading ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700'
          } text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2`}
        >
          {isLoading ? (
            <>
              <span className="animate-spin">⌛</span>
              Processing...
            </>
          ) : (
            'Delete Handy Person'
          )}
        </button>
      </div>
    </form>
  );
}