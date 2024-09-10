import React from 'react';
import Badge from '../components/Badge';

const Profile = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Your Profile</h2>
      <p className="mt-4">View your achievements and progress.</p>
      <div className="mt-6">
        <Badge
          name="Clean Sport Advocate"
          description="Awarded for demonstrating commitment to anti-doping principles."
        />
        {/* Additional badges and achievements can be displayed here */}
      </div>
    </div>
  );
};

export default Profile;
