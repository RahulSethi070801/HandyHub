import React from 'react';

interface FiltersProps {
  onRatingChange: (rating: number) => void;
  onMaxPriceChange: (price: number) => void;
  onServiceChange: (service: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onRatingChange, onMaxPriceChange, onServiceChange }) => {
  const [selectedRating, setSelectedRating] = React.useState<number | null>(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = React.useState<number | null>(null);
  const [selectedService, setSelectedService] = React.useState<string | null>(null);

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
          placeholder="Max"
          className="w-full"
          value={selectedMaxPrice || ''}
          onChange={handleMaxPriceChange}
        />
      </div>

      <div>
        <h2 className="font-semibold mb-4 flex items-center justify-between">
          Services
          <span className="text-gray-400">▼</span>
        </h2>
        {[
          { name: 'Plumbing', count: 9 },
          { name: 'Electrician', count: 4 },
          { name: 'Mechanic', count: 5 },
          { name: 'Security Guard', count: 3 }
        ].map((service) => (
          <label key={service.name} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              value={service.name}
              checked={selectedService?.includes(service.name) || false}
              onChange={(event) => handleServiceChange(event)}
            />
            <span className="flex-1">{service.name}</span>
            <span className="text-gray-500">{service.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filters;