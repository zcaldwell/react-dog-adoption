import React from 'react';
import '../styles/Dogdetail.css';

export default function DogDetail({ age, name, image, breed, bio }) {
  const dogAge = () => {
    if (age === 0) {
      return 'a less than a year';
    } else {
      return `a ${age} year`;
    }
  };

  return (
    <div className="container">
      <h1>{name}</h1>
      <img src={image} className="detail-image" />
      <p>
        {name} is {dogAge()} old {breed}
      </p>
      <p>{bio}</p>
    </div>
  );
}
