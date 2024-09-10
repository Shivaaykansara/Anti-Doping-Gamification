import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-lg mb-4">{description}</p>
      <Link to={link} className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300">
        Play Now
      </Link>
    </div>
  );
};

export default GameCard;
