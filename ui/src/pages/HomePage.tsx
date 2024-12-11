import React,  {useState, useEffect }  from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ServiceCard from '../components/ServiceCard';
import SearchFilters from '../components/SearchFilters';

interface ServiceProvider {
  handyPersonId: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  city: string;
  state: string;
  rate: number;
  serviceName: string;
  averageRating: number;
  serviceDescription: string;
}


export default function HomePage() {

  const [serviceProviders, setServiceProviders] = useState<ServiceProvider[]>([]);
//   const [filteredProviders, setFilteredProviders] = useState<ServiceProvider[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [keyword, setKeyword] = useState<string>('');  // State to store the keyword
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [serviceName, setServiceName] = useState<string | null>(null);

  useEffect(() => {
    let url = 'http://localhost:8080/filterHandyPersons?';
    if (rating !== null) {
      url += `minRating=${rating}&`;
    }
    if (maxPrice !== null) {
      url += `maxPrice=${maxPrice}&`;
    }
    if (serviceName !== null) {
      url += `serviceName=${serviceName}&`;
    }

    if (url.endsWith('&')) {
      url = url.slice(0, -1);
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
  }, [rating, maxPrice, serviceName]);

  // Function to fetch service providers from the backend
    const fetchServiceProviders = async (keyword: string = '') => {
      let url = `http://localhost:8080/searchHandyPersons?keyword=${keyword}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setServiceProviders(data);
//         setFilteredProviders(data);  // Initially, show all fetched data
      } catch (error) {
        console.error('Error fetching service providers:', error);
      }
    };

    // Fetch providers when component mounts or rating/keyword changes
      useEffect(() => {
        fetchServiceProviders(keyword);
      }, [keyword]);

      // Handle search input change
      const handleSearch = (searchKeyword: string) => {
        setKeyword(searchKeyword);
        fetchServiceProviders(searchKeyword);  // Fetch results based on the new keyword
      };



  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80">
            <Filters onRatingChange={setRating} onMaxPriceChange={setMaxPrice} onServiceChange={setServiceName}/>
          </aside>

          <div className="flex-1">
            {/* Pass handleSearch to SearchFilters */}
            <SearchFilters onSearch={handleSearch} />

            <div className="mt-6">
            {serviceProviders.map((provider) => (
              <ServiceCard
                key={`${provider.handyPersonId}-${provider.serviceName}`}
                name={`${provider.firstName} ${provider.lastName}`}
                service={provider.serviceName}
                rating={provider.averageRating}
                reviews={1} // Assuming you don't have reviews count in your query
                price={provider.rate}
                description={[`City: ${provider.city}, State: ${provider.state}, Description: ${provider.ServiceDescription}`]}
                contactNumber={provider.contactNumber}
                image="https://via.placeholder.com/150" // Placeholder image
              />
            ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}