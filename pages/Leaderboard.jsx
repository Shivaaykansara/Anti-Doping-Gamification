import React from 'react';
import Leaderboard from '../components/Leaderboard';

const LeaderboardPage = () => {
  const leaders = [
    { name: "Alice Johnson", score: 500 },
    { name: "Bob Smith", score: 450 },
    { name: "Charlie Brown", score: 400 }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
        <p className="text-lg mb-8">See how you rank among other athletes in the anti-doping education challenge.</p>
      </section>

      {/* Leaderboard */}
      <section className="container mx-auto p-6">
        <Leaderboard leaders={leaders} />
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 National Anti-Doping Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LeaderboardPage;
