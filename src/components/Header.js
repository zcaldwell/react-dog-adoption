import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/Dogs">Home</NavLink>
    </header>
  );
}
