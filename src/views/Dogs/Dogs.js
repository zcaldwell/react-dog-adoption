import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/dogs';
import DogList from '../../components/DogList';

export default function Pets() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>All Dogs Loading!</h1>;

  return (
    <div>
      <DogList dogs={dogs} />
    </div>
  );
}
