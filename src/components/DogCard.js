import React from 'react';
import '../styles/Dogcard.css';

export default function DogCard({ age, name, image, breed }) {
  return (
    <div className="dogcard">
      <h1>Meet {name}</h1>
      <img src={image} className="card-image" />
      <p>
        {name} is a(n) {age} year old {breed}
      </p>
    </div>
  );
}
