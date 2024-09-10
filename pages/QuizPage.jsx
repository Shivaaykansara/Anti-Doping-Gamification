import React from 'react';

const QuizPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Quiz Time</h1>
        <p className="text-lg mb-8">Test your knowledge about anti-doping rules and earn rewards!</p>
      </section>

      {/* Quiz Content */}
      <section className="container mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Quiz: Anti-Doping Basics</h2>
        <p className="text-lg mb-4">Question 1: What substances are prohibited in sports?</p>
        {/* Placeholder for quiz questions */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300">
          Submit Answers
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 National Anti-Doping Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default QuizPage;
