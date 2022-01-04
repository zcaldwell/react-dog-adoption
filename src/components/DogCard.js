import React from 'react';

export default function DogCard({ age, name, image, breeds }) {
  return (
    <div className="pokecard">
      <h1>Meet {name}</h1>
      <img src={image} />
      <p>
        {name} is a(n) {age} year old {breeds}
      </p>
    </div>
  );
}
