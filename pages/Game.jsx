import React from 'react';
import GameCard from '../components/GameCard';

const Game = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Anti-Doping Challenge</h1>
        <p className="text-lg mb-8">
          Put your knowledge to the test and learn about anti-doping rules in a fun and interactive way.
        </p>
      </section>

      {/* Game Instructions Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">How to Play</h2>
        <p className="mb-4">
          The Anti-Doping Challenge consists of various levels and mini-games designed to test and improve your knowledge of anti-doping regulations. 
          Follow the instructions for each game and complete the challenges to progress and earn rewards.
        </p>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Game Instructions</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">Start by selecting a game from the options below.</li>
            <li className="mb-2">Follow the on-screen instructions to complete each level.</li>
            <li className="mb-2">Earn points and badges based on your performance.</li>
            <li className="mb-2">Compete with friends and climb the leaderboard.</li>
          </ul>
        </div>
      </section>

      {/* Game Features Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Game Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GameCard
            title="Engaging Levels"
            description="Progress through various levels designed to challenge and educate you about anti-doping."
          />
          <GameCard
            title="Mini-Games"
            description="Participate in mini-games that cover different aspects of anti-doping rules and practices."
          />
          <GameCard
            title="Leaderboards"
            description="See how you stack up against others and compete for top spots on the leaderboard."
          />
        </div>
      </section>

      {/* Game Demo Section */}
      <section className="bg-blue-100 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Try a Demo</h2>
        <p className="text-lg mb-6">
          Get a taste of the interactive experience by trying out a demo game below.
        </p>
        <a 
          href="#"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Start Demo
        </a>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Play?</h2>
        <p className="text-lg mb-6">
          Dive into the Anti-Doping Challenge and start learning in a fun, engaging way. Good luck!
        </p>
        <a 
          href="/quiz" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Begin the Challenge
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 National Anti-Doping Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Game;
