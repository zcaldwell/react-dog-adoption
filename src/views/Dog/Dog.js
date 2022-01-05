import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogById } from '../../services/dogs';
import DogDetail from '../../components/DogDetail';

export default function Dog(props) {
  const [dog, setDog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(props.match.params.id);
      setDog(data[0]);
    };
    fetchData();
  }, [props]);

  return (
    <div>
      <DogDetail dog={dog} />
    </div>
  );
}
