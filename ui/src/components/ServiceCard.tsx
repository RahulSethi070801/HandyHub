import React from 'react';
import { Phone, Star } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  service: string;
  rating: number;
  reviews: number;
  price: number;
  description: string[];
  image: string;
}

export default function ServiceCard({
  name,
  service,
  rating,
  reviews,
  price,
  description,
  image
}: ServiceCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow mb-4">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-blue-600">{name}</h3>
            <p className="font-medium">{service}</p>
          </div>
          <p className="text-xl font-bold">${price}</p>
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <Star className="text-yellow-400 fill-current" size={16} />
          <span className="font-medium">{rating}</span>
          <span className="text-gray-500">({reviews}k reviews)</span>
        </div>

        <ul className="mb-4">
          {description.map((item, index) => (
            <li key={index} className="text-gray-600 mb-1">• {item}</li>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <button className="text-blue-600 hover:underline">View details</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Phone size={16} />
            XXX-XXX-XXXX
          </button>
        </div>
      </div>
    </div>
  );
}