'use client';

import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
