import React, {useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ServiceCard from './components/ServiceCard';
import SearchFilters from './components/SearchFilters';

interface ServiceProvider {
  handyPersonId: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  city: string;
  state: string;
  averageRating: number;
}


function App() {

  const [serviceProviders, setServiceProviders] = useState<ServiceProvider[]>([]);
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    let url = 'http://localhost:8080/getAllHandyPersons';
    if (rating !== null) {
      url += `/${rating}`;
    }

    console.log(`Fetching data from: ${url}`);
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {console.log('Fetched data:', data);
      setServiceProviders(data)})
      .catch(error => console.error('Error fetching service providers:', error));
  }, [rating]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80">
            <Filters onRatingChange={setRating}/>
          </aside>
          
          <div className="flex-1">
            <div className="mt-6">
            {serviceProviders.map((provider) => (
              <ServiceCard
                key={provider.handyPersonId}
                name={`${provider.firstName} ${provider.lastName}`}
                service="Handy Person"
                rating={provider.averageRating}
                reviews={0} // Assuming you don't have reviews count in your query
                price={0} // Assuming you don't have price in your query
                description={[`Contact: ${provider.contactNumber}`, `City: ${provider.city}, State: ${provider.state}`]}
                image="https://via.placeholder.com/150" // Placeholder image
              />
            ))}
            </div>
            {/* <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">Service Providers</h1>
              <ServiceProviderList />
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
