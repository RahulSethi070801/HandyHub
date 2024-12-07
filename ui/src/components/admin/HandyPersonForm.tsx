import React, {useState} from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

export interface HandyPerson {
  handyPersonId: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  address: string;
  city: string;
  state: string;
  country: string;
  potsalCode: string;
}

export const handyPersonApi = {
  create: async (data: HandyPerson): Promise<void> => {
    await api.post('/createHandyPerson', data);
  },

  update: async (id: number, data: HandyPerson): Promise<void> => {
    await api.put(`/updateHandyPerson/${id}`, data);
  }
};

interface HandyPersonFormProps {
  mode: 'add' | 'update';
}

const initialState: HandyPerson = {
  handyPersonId: '',
  firstName: '',
  lastName: '',
  contactNumber: '',
  emailAddress: '',
  address: '',
  city: '',
  state: '',
  country: '',
  postalCode: ''
};

export default function HandyPersonForm({ mode }: HandyPersonFormProps) {
  const [formData, setFormData] = useState<HandyPerson>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === 'add') {
        await handyPersonApi.create(formData);
        toast.success('Handy person added successfully');
      } else {
        await handyPersonApi.update(formData.handyPersonId, formData);
        toast.success('Handy person updated successfully');
      }
      setFormData(initialState);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mode === 'update' && (<div>
          <label className="block text-sm font-medium text-gray-700">Handy Person ID</label>
          <input
            type="text"
            name="handyPersonId"
            value={formData.handyPersonId}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>)}
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2`}
        >
          {isLoading ? (
            <>
              <span className="animate-spin">⌛</span>
              Processing...
            </>
          ) : (
            mode === 'add' ? 'Add Handy Person' : 'Update Handy Person'
          )}
        </button>
      </div>
    </form>
  );
}