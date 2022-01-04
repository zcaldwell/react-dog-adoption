import React from 'react';
import DogCard from './DogCard';
import { Link } from 'react-router-dom';

export default function DogList({ dogs }) {
  return (
    <div className="card-container">
      {dogs.map((dog) => (
        <Link key={dog.id}>
          <DogCard key={dog.dogs} {...dog} />
        </Link>
      ))}
    </div>
  );
}
