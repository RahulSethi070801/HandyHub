import React from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ServiceCard from './components/ServiceCard';
import SearchFilters from './components/SearchFilters';

const SAMPLE_DATA = [
  {
    name: 'JOHN WELL',
    service: 'Intense bathroom cleaning',
    rating: 4.78,
    reviews: 1.7,
    price: 20,
    description: [
      'Hard water stains & dirt in tile grouting removal with scrubbing machine',
      'Intense cleaning of toilet pot, tiles, floor, basin, exhaust, etc'
    ],
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    name: 'MIKE SMITH',
    service: 'Professional plumbing service',
    rating: 4.92,
    reviews: 2.1,
    price: 35,
    description: [
      'Expert in fixing leaks, clogs, and pipe installations',
      'Emergency plumbing services available 24/7'
    ],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80">
            <Filters />
          </aside>
          
          <div className="flex-1">
            <div className="mt-6">
              {SAMPLE_DATA.map((provider, index) => (
                <ServiceCard key={index} {...provider} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;