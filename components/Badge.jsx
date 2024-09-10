import React from 'react';

const Badge = ({ name, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Badge;
