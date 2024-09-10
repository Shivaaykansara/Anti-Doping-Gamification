import React from 'react';
import GameCard from '../components/GameCard';
import LearningModule from '../components/LearningModule';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Anti-Doping Gamification</h1>
        <p className="text-lg mb-8">
          Discover a new way to learn about anti-doping rules through interactive games and quizzes. 
          Earn rewards and showcase your knowledge as you progress!
        </p>
        <Link 
          to="/game" 
          className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Start Your Journey
        </Link>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg mb-6">
          Our platform is designed to make learning about anti-doping regulations engaging and effective. 
          By incorporating gamification, we make education fun and rewarding. Here's what you can expect:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Comprehensive Education</h3>
            <p>
              Learn about prohibited substances, testing procedures, and the importance of clean sport through interactive content and multimedia resources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Engaging Games and Quizzes</h3>
            <p>
              Test your knowledge and compete with others in fun and challenging quizzes and games designed to reinforce your understanding of anti-doping rules.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Rewards and Recognition</h3>
            <p>
              Earn badges, achievements, and climb the leaderboard as you progress. Showcase your commitment to clean sport and stand out in the community.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GameCard
            title="Interactive Lessons"
            description="Dive into lessons designed to make learning about anti-doping rules engaging and fun."
          />
          <GameCard
            title="Earn Badges"
            description="Complete challenges and quizzes to earn badges and showcase your achievements."
          />
          <GameCard
            title="Compete and Collaborate"
            description="Join competitions and collaborate with others to stay motivated and learn more."
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-100 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Platform Impact</h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">1000+</h3>
            <p className="text-lg">Active Users</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-lg">Games Completed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">200+</h3>
            <p className="text-lg">Achievements Earned</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-100 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join the Movement</h2>
        <p className="text-lg mb-6">
          Be a part of a community committed to clean sport. Promote anti-doping awareness and enhance your knowledge today!
        </p>
        <Link 
          to="/profile" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
        >
          View Your Profile
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 National Anti-Doping Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
