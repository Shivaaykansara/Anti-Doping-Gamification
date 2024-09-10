import React from 'react';

const Leaderboard = ({ leaders }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
      <ul className="space-y-4">
        {leaders.map((leader, index) => (
          <li key={index} className="flex justify-between">
            <span>{leader.name}</span>
            <span>{leader.score} Points</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
