import React, { useState } from 'react';

const Quiz = () => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    // Logic for submitting the quiz
    alert(`Submitted answer: ${answer}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold">Quiz</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="block mb-2">
          Question: What is a prohibited substance?
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="block w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quiz;
