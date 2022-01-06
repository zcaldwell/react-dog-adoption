import React from 'react';
import DogForm from '../../components/DogForm';
import { useState, useEffect } from 'react';
import { fetchDogById } from '../../services/dogs';
import { useParams } from 'react-router-dom';

export default function Edit() {
  const [dog, setDog] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogById(params.id);
      setDog(resp);
    };
    fetchData();
  }, [params.id]);
  const updateDog = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    updateDog(dog);
  };
  return (
    <div>
      <DogForm {...dog} handleSubmit={handleSubmit} />
    </div>
  );
}
