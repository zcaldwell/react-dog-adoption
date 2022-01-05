import React from 'react';

export default function DogForm({ name, bio, image, age, breed, handleSubmit }) {
  return (
    <div className="editor">
      <div className="form-control">
        <label>Name</label>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => {
            e.target.value;
          }}
        />
      </div>
      <div className="form-control">
        <label>Age</label>
        <input
          placeholder="age"
          type="text"
          value={age}
          onChange={(e) => {
            e.target.value;
          }}
        />
      </div>
      <div className="form-control">
        <label>Image</label>
        <input
          placeholder="image"
          type="text"
          value={image}
          onChange={(e) => {
            e.target.value;
          }}
        />
        <div className="form-control">
          <label>Bio</label>
          <textarea
            placeholder="bio"
            value={bio}
            onChange={(e) => {
              e.target.value;
            }}
          />
        </div>
        <div className="form-control">
          <label>Breed</label>
          <input
            placeholder="breed"
            value={breed}
            type="text"
            onChange={(e) => {
              e.target.value;
            }}
          />
        </div>
        <div className="submit-button">
          <button onClick={handleSubmit}>save</button>
        </div>
      </div>
    </div>
  );
}
