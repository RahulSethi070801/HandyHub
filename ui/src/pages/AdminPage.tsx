import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';
import HandyPersonForm from '../components/admin/HandyPersonForm';
import DeleteForm from '../components/admin/DeleteForm';

type FormMode = 'add' | 'update' | 'delete';

export default function AdminPage() {
  const [mode, setMode] = useState<FormMode>('add');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />

      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMode('add')}
              className={`px-4 py-2 rounded-lg ${
                mode === 'add' ? 'bg-indigo-600 text-white' : 'bg-gray-100'
              }`}
            >
              Add
            </button>
            <button
              onClick={() => setMode('update')}
              className={`px-4 py-2 rounded-lg ${
                mode === 'update' ? 'bg-indigo-600 text-white' : 'bg-gray-100'
              }`}
            >
              Update
            </button>
            <button
              onClick={() => setMode('delete')}
              className={`px-4 py-2 rounded-lg ${
                mode === 'delete' ? 'bg-indigo-600 text-white' : 'bg-gray-100'
              }`}
            >
              Delete
            </button>
          </div>

          {mode === 'delete' ? (
            <DeleteForm />
          ) : (
            <HandyPersonForm mode={mode} />
          )}
        </div>
      </main>
    </div>
  );
}