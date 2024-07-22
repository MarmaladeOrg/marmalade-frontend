import React from 'react';
import Header from './Header';
import GoalSection from './GoalSection';
import TeamSection from './TeamSection';
import ReferencesSection from './ReferencesSection';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <GoalSection />
      <TeamSection />
      <ReferencesSection />
    </div>
  );
};

export default App;

