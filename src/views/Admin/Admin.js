import React from 'react';
import DogForm from '../../components/DogForm';
import { useState } from 'react';
import { addDog } from '../../services/dogs';
import { useHistory } from 'react-router-dom';

export default function Admin() {
  const [dog, setDog] = useState({});
  const history = useHistory();

  const updateDogForm = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDog(dog);
      alert('Success!');
      history.push(`/Dogs/`);
    } catch {
      alert('failed');
    }
  };

  return (
    <div>
      <DogForm {...dog} handleSubmit={handleSubmit} updateDogForm={updateDogForm} />
    </div>
  );
}
