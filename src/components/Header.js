import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <div className="header">
      <header>
        <NavLink to="/Dogs">Home</NavLink>
      </header>
    </div>
  );
}
