import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogById } from '../../services/dogs';
import DogDetail from '../../components/DogDetail';
import { useParams, useHistory } from 'react-router-dom';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  const handleEdit = async () => {
    history.push(`/dogs/${params.id}/edit`);
  };

  if (loading) return <h1>Dog Is Loading</h1>;

  return (
    <div>
      <DogDetail {...dog} handleEdit={handleEdit} />
    </div>
  );
}
