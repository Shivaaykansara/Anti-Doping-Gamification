// src/components/AIMentorAssistant.jsx

import React, { useState } from 'react';

const AIMentorAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    // Add user message to chat
    setMessages([...messages, { text: input, sender: 'user' }]);

    // Get AI response
    const aiResponse = getAIResponse(input);
    setMessages([...messages, { text: input, sender: 'user' }, { text: aiResponse, sender: 'ai' }]);
    setInput('');
  };

  const getAIResponse = (userMessage) => {
    // Responses for specific queries
    const responses = {
      'what is anti-doping?': 'Anti-doping refers to the practices and rules that prevent athletes from using prohibited substances to enhance performance.',
      'how to report doping?': 'You can report doping by contacting your national anti-doping agency or using the confidential reporting channels provided by your sports federation.',
      'what are prohibited substances?': 'Prohibited substances include certain steroids, stimulants, and other drugs that are banned in competitive sports.',
      'how can you help me?': 'I am here to provide you with information about anti-doping rules, help you understand prohibited substances, guide you on how to report doping, and assist you with any other related queries.',
    };

    // Lowercase user input for case-insensitive matching
    const normalizedMessage = userMessage.toLowerCase().trim();

    // Default response for known greetings and miscellaneous inputs
    if (['hi', 'hello', 'hey'].includes(normalizedMessage)) {
      return 'Hello! I’m your AI assistant here to help you with any questions about anti-doping. How can I assist you today?';
    }

    // Return specific response or default response
    return responses[normalizedMessage] || 'I’m here to assist you. If you have any questions, feel free to ask!';
  };

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-800 text-white p-4">
        <h2 className="text-lg font-semibold">AI Mentor Assistant</h2>
      </div>
      <div className="p-4 h-80 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center p-4 border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
          placeholder="Ask me anything..."
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Send
        </button>
      </form>
    </div>
  )
};

export default AIMentorAssistant;
