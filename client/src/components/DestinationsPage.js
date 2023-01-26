import React, { useState, useEffect } from 'react';

function DestinationsPage() {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/destinations');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setDestinations(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Destinations</h2>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            {destination.country}, {destination.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationsPage;
