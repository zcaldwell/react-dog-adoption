import React from 'react';
import DogForm from '../../components/DogForm';
import { useState, useEffect } from 'react';
import { fetchDogById, updateDog } from '../../services/dogs';
import { useParams, useHistory } from 'react-router-dom';

export default function Edit() {
  const [dog, setDog] = useState({});
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogById(params.id);
      setDog(resp);
    };
    fetchData();
  }, [params.id]);

  const updateDogForm = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDog(dog);
      alert('Success!');
      history.push(`/dogs/${params.id}`);
    } catch {
      alert('Failed');
    }
  };

  return (
    <div>
      <DogForm {...dog} handleSubmit={handleSubmit} updateDogForm={updateDogForm} />
    </div>
  );
}
