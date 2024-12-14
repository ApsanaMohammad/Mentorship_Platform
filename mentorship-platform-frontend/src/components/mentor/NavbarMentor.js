import React, { useState } from 'react';
import api from '../../services/api';// Import the api service

const NavbarMentor = ({ setActiveComponent }) => {
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    window.location.href = '/login'; // Redirect to login
  };

  const handleDeleteAccount = async () => {
    if (!userId) {
      alert('User ID is not available');
      return;
    }

    const confirmDelete = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');

    if (confirmDelete) {
      try {
        const response = await api.delete(`/Delete/delete-account/${userId}`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (response.status === 200) {
          alert('Your account has been deleted.');
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          localStorage.removeItem('id');
          window.location.href = '/login'; // Redirect to login after deletion
        } else {
          alert('Failed to delete account. Please try again later.');
        }
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('An error occurred while trying to delete your account.');
      }
    }
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 bg-light vh-100 p-3" style={{ width: '250px' }}>
      <h4 className="text-center mb-4">
        <i className="fas fa-chalkboard-teacher me-2"></i> Mentor Dashboard
      </h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <button className="nav-link btn btn-link text-start" onClick={() => setActiveComponent('profile')}>
            <i className="fas fa-user me-2"></i> Profile
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="nav-link btn btn-link text-start" onClick={() => setActiveComponent('class-schedule')}>
            <i className="fas fa-calendar-alt me-2"></i> Class Schedule
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="nav-link btn btn-link text-start" onClick={() => setActiveComponent('mentee-requests')}>
            <i className="fas fa-user-friends me-2"></i> Mentee Requests
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="nav-link btn btn-link text-start" onClick={() => setActiveComponent('todo-work')}>
            <i className="fas fa-tasks me-2"></i> To-Do Work
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="nav-link btn btn-link text-start" onClick={() => setActiveComponent('notify-mentor')}>
            <i className="fas fa-bell me-2"></i> Notifications
          </button>
        </li>
        {/* Logout and Delete Account Buttons */}
        <li className="nav-item mt-4">
          <button className="nav-link btn btn-link text-start" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt me-2"></i> Logout
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="nav-link btn btn-link text-start" onClick={handleDeleteAccount}>
            <i className="fas fa-trash me-2"></i> Delete Account
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMentor;
