import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link to="/" className="text-2xl font-bold">
          Anti-Doping Platform
        </Link>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/game" className="hover:underline">
              Games
            </Link>
          </li>
          <li>
            <Link to="/learning" className="hover:underline">
              Learning
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="hover:underline">
              Quiz
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/leaderboard" className="hover:underline">
              Leaderboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
