import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface FiltersProps {
    rating: number | null;
    maxPrice: number | null;
    serviceName: string | null;
  onRatingChange: (rating: number) => void;
  onMaxPriceChange: (price: number) => void;
  onServiceChange: (service: string) => void;
  resetFilters: boolean;
}

interface Service{
    serviceId: number;
    serviceName: string;
    serviceDescription: string;}

const Filters: React.FC<FiltersProps> = ({ rating, maxPrice, serviceName, onRatingChange, onMaxPriceChange, onServiceChange, resetFilters }) => {
  const [selectedRating, setSelectedRating] = React.useState<number | null>(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = React.useState<number | null>(null);
  const [selectedService, setSelectedService] = React.useState<string | null>(null);
  const [services, setServices] = React.useState<Service[]>([]);

  React.useEffect(() => {
      const fetchServices = async () => {
          try {
              const response = await axios.get('http://localhost:8080/getAllServices');
              setServices(response.data);
          } catch (error) {
              console.error('Error fetching services:', error);}};
              fetchServices();
  },
  []);

  useEffect(() => {
    if (resetFilters) {
      setSelectedRating(null);
      setSelectedMaxPrice(null);
      setSelectedService(null);
    }
  }, [resetFilters]);

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
    onRatingChange(rating);
  }
  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = event.target.value ? parseFloat(event.target.value) : null;
    setSelectedMaxPrice(price);

    if (price !== null) {
      onMaxPriceChange(price);
    }
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const service = event.target.value;
    setSelectedService((prev) => (prev === service ? null : service)); // Toggle selection
    onServiceChange(service);
  };
  
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h2 className="font-semibold mb-4 flex items-center justify-between">
          Customer Rating
          <span className="text-gray-400">▼</span>
        </h2>
        {[5, 4, 3, 2, 1].map((rating) => (
          <label key={rating} className="flex items-center mb-2">
            <input type="radio" name="rating" className="mr-2" 
            checked={selectedRating === rating}
            onChange = {() => handleRatingChange(rating)}/>
            <span className="flex-1">{'★'.repeat(rating)}{'☆'.repeat(5-rating)} & up</span>
            {/* <span className="text-gray-500">{10 + rating * 5}</span> */}
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-4 flex items-center justify-between">
          Max Price
          <span className="text-gray-400">▼</span>
        </h2>
        <input
          type="number"
          min="0"
          placeholder="Max Price"
          className="w-full"
          selected={selectedMaxPrice}
          value={selectedMaxPrice || ''}
          onChange={handleMaxPriceChange}
        />
      </div>

      <div>
        <h2 className="font-semibold mb-4 flex items-center justify-between">
          Services
          <span className="text-gray-400">▼</span>
        </h2>
        {services.length >0 ? (
            services.map((service) => (
                <label key={service.serviceId} className="flex items-center mb-2">
                <input
                type="radio"
                className="mr-2"
                name="service"
                value={service.serviceName}
                checked={selectedService === service.serviceName}
                onChange={handleServiceChange}
                />
                <span className="flex-1">{service.serviceName}</span>
                </label>))
                ) : (<p>Loading services...</p>)}

      </div>
    </div>
  );
};

export default Filters;