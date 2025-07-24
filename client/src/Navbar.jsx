import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" >Home</Link> <br />
      <Link to="/portfolio">Portfolio</Link> <br />
      <Link to="/solution">Solution</Link> <br />
      <Link to ="/dashboard">Dashboard</Link> 
    </nav>
  );
};

export default Navbar;
