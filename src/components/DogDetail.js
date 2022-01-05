import React from 'react';

export default function DogDetail({ dog }) {
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.image} />
      <p>
        {dog.name} is a(n) {dog.age} year old {dog.breed}
      </p>
      <p>{dog.bio}</p>
    </div>
  );
}
