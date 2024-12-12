import React, { useState } from 'react';
import NavbarMentee from './NavbarMentee';
import Footer from '../main/Footer';
import MentorSuggestions from './MentorSuggestions';
import Notes from './Notes';
import RequestMentor from './RequestMentor';
import NotifyMentee from './NotifyMentee';
import Profile from '../main/Profile';

const MenteePage = () => {
  const username = localStorage.getItem('username');
  const role = localStorage.getItem('role');
  
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState('dashboard');

  // Function to render the selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'mentor-suggestions':
        return <MentorSuggestions />;
      case 'notes':
        return <Notes />;
      case 'request-mentor':
        return <RequestMentor />;
      case 'notify-mentee':
        return <NotifyMentee />;
      case 'profile':
        return <Profile />;
      default:
        return <p className="lead text-center">Welcome to the Mentee Dashboard!</p>;
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar Navigation */}
      <NavbarMentee setActiveComponent={setActiveComponent} />

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        <header className="bg-primary text-white text-center py-3">
          <h2>Hello, {username}!</h2>
          <p>You are logged in as a {role}.</p>
        </header>

        <div className="container my-4 flex-grow-1">
          {renderComponent()}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default MenteePage;
