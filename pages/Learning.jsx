import React from 'react';
import LearningModule from '../components/LearningModule';

const Learning = () => {
  const modules = [
    { title: "Module 1: Introduction to Anti-Doping", content: "Learn the basics of anti-doping regulations and their importance in sports." },
    { title: "Module 2: Prohibited Substances", content: "Understand what substances are prohibited and why." },
    { title: "Module 3: Testing Procedures", content: "Get familiar with the testing procedures and what to expect during testing." },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Learning Modules</h1>
        <p className="text-lg mb-8">
          Explore our comprehensive educational modules to deepen your understanding of anti-doping regulations.
        </p>
      </section>

      {/* Learning Modules */}
      <section className="container mx-auto p-6">
        {modules.map((module, index) => (
          <LearningModule key={index} title={module.title} content={module.content} />
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p></p>
      </footer>
    </div>
  );
};

export default Learning;
