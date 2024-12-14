import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'; // Import the api.js service

const NavbarMentee = ({ setActiveComponent }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id'); 

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    navigate('/login');
  };

  // Handle delete account
  const handleDeleteAccount = async () => {
    if (!userId) {
      alert('User ID is not available');
      return;
    }

    const confirmDelete = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');

    if (confirmDelete) {
      try {
        const response = await api.delete(`/Delete/delete-account/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          // On successful account deletion, clear localStorage and redirect to login
          alert('Your account has been deleted.');
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          localStorage.removeItem('id');
          navigate('/login');
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
        <i className="fas fa-user-graduate me-2"></i> Mentee Dashboard
      </h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <button className="nav-link btn btn-link text-start" onClick={() => setActiveComponent('profile')}>
            <i className="fas fa-user me-2"></i> Profile
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="nav-link btn btn-link text-start" onClick={() => setActiveComponent('mentor-suggestions')}>
            <i className="fas fa-lightbulb me-2"></i> Mentor Suggestions
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="nav-link btn btn-link text-start" onClick={() => setActiveComponent('notes')}>
            <i className="fas fa-sticky-note me-2"></i> Notes
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="nav-link btn btn-link text-start" onClick={() => setActiveComponent('notify-mentee')}>
            <i className="fas fa-bell me-2"></i> Notifications
          </button>
        </li>
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

export default NavbarMentee;
