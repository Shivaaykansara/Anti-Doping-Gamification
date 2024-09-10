import React from 'react';

const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    points: 350,
    badges: ["Clean Sport Advocate", "Quiz Master"]
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">User Profile</h1>
        <p className="text-lg mb-8">View and manage your profile information and achievements.</p>
      </section>

      {/* Profile Information */}
      <section className="container mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
        <p className="text-lg mb-2"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-lg mb-2"><strong>Points:</strong> {user.points}</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Badges</h3>
        <ul className="list-disc pl-5">
          {user.badges.map((badge, index) => (
            <li key={index} className="text-lg">{badge}</li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 National Anti-Doping Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserProfile;
