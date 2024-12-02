import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">Product Catalog Application</h1>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/cart" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
