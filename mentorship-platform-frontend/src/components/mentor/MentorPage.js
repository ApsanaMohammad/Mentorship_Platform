import React, { useState } from 'react';
import NavbarMentor from './NavbarMentor';
import Footer from '../main/Footer';
import ClassSchedule from './ClassSchedule';
import MenteeRequests from './MenteeRequestsForMentor';
import ToDoWork from './ToDoWork';
import NotifyMentor from './NotifyMentor';
import Profile from '../main/Profile';

const MentorPage = () => {
  const username = localStorage.getItem('username');
  const role = localStorage.getItem('role');
  
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState('dashboard');

  // Function to render the selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'class-schedule':
        return <ClassSchedule />;
      case 'mentee-requests':
        return <MenteeRequests />;
      case 'todo-work':
        return <ToDoWork />;
      case 'notify-mentor':
        return <NotifyMentor />;
      case 'profile':
        return <Profile />;
      default:
        return (
          <div className="text-center mt-5">
            <h2 className="display-4 text-success mb-4">Welcome to the Mentor Dashboard!</h2>
            <p className="lead text-muted mb-4">
              We're thrilled to have you onboard. Get started by updating your profile, offering mentorship, and helping mentees succeed!
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h4 className="card-title">How to Get Started</h4>
                    <ul className="list-group">
                      <li className="list-group-item">Complete your mentor profile</li>
                      <li className="list-group-item">Browse mentee profiles</li>
                      <li className="list-group-item">Start offering guidance and support!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <i className="fas fa-chalkboard-teacher fa-3x text-warning"></i>
              <p className="text-muted mt-3">Your expertise is the key to shaping future leaders. Let’s make a difference!</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar Navigation */}
      <NavbarMentor setActiveComponent={setActiveComponent} />

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

export default MentorPage;
