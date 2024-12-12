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
        return <p className="lead text-center">Welcome to the Mentor Dashboard!</p>;
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
