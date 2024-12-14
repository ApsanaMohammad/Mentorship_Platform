import React, { useState } from 'react';
import NavbarMentee from './NavbarMentee';
import Footer from '../main/Footer';
import MentorSuggestions from './MentorSuggestions';
import Notes from './Notes';
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
      case 'notify-mentee':
        return <NotifyMentee />;
      case 'profile':
        return <Profile />;
      default:
        return (
          <div className="text-center mt-5">
            <h2 className="display-4 text-success mb-4">Welcome to the Mentee Dashboard!</h2>
            <p className="lead text-muted mb-4">
              We're excited to have you here. Get started by completing your profile, connecting with mentors, and exploring opportunities!
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h4 className="card-title">How to Get Started</h4>
                    <ul className="list-group">
                      <li className="list-group-item">Complete your profile</li>
                      <li className="list-group-item">Explore available mentors</li>
                      <li className="list-group-item">Send requests and start learning!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <i className="fas fa-grin-stars fa-3x text-warning"></i>
              <p className="text-muted mt-3">Let’s make the most of this mentorship journey together!</p>
            </div>
          </div>
        );
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
