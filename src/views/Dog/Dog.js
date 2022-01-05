import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogById } from '../../services/dogs';
import DogDetail from '../../components/DogDetail';

export default function Dog(props) {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(props.match.params.id);
      setDog(data[0]);
      setLoading(false);
    };
    fetchData();
  }, [props]);

  if (loading) return <h1>Dog Is Loading</h1>;

  return (
    <div>
      <DogDetail {...dog} />
    </div>
  );
}
