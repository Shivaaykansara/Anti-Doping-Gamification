import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Game from '../pages/Game';
import QuizPage from '../pages/QuizPage';
import Learning from '../pages/Learning';
// import Dashboard from '../pages/Dashboard';
import UserProfile from '../pages/UserProfile';
import LeaderboardPage from '../pages/Leaderboard';
import Dashboard from '../components/Dashboard';
import NavBar from '../components/NavBar';
import AIMentorAssistant from '../components/AIMentorAssistant';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
        <AIMentorAssistant />
      </div>
    </Router>
  );
};

export default App;
