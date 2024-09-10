import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Dashboard</h1>
        <p className="text-lg mb-8">
          Track your progress, view achievements, and stay on top of your anti-doping education journey.
        </p>
      </section>

      {/* Progress Section */}
      <section className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Score</h2>
          <p className="text-lg mb-4">Total Points: 350</p>
          <Link to="/quiz" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300">
            Take a Quiz
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          <p className="text-lg mb-4">3 Badges Earned</p>
          <Link to="/learning" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300">
            View Achievements
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
          <p className="text-lg mb-4">Rank: 5th</p>
          <Link to="/leaderboard" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300">
            View Leaderboard
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
      </footer>
    </div>
  );
};

export default Dashboard;
