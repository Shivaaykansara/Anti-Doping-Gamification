import React from 'react';

const LearningModule = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default LearningModule;
