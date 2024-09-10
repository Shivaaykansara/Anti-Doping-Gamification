import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">Anti-Doping Gamification</h1>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/game" className="mx-2">Game</Link>
          <Link to="/quiz" className="mx-2">Quiz</Link>
          <Link to="/profile" className="mx-2">Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
