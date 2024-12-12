import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Profile = () => {
  const [username] = useState(localStorage.getItem('username'));
  const [role] = useState(localStorage.getItem('role'));
  const [id] = useState(localStorage.getItem('id'));

  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [bio, setBio] = useState(localStorage.getItem('bio') || '');
  const [skills, setSkills] = useState(localStorage.getItem('skills') || '');
  const [location, setLocation] = useState(localStorage.getItem('location') || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileData = {
      id,
      username,
      role,
      phone,
      bio,
      skills,
      location,
    };

    try {
      const response = await fetch('http://localhost:5226/api/profile/saveprofile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        alert('Profile updated successfully');
        // Update localStorage after successful profile update
        localStorage.setItem('phone', phone);
        localStorage.setItem('bio', bio);
        localStorage.setItem('skills', skills);
        localStorage.setItem('location', location);
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">
        <i className="fas fa-user-circle me-2"></i>User Profile
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="card shadow mb-4">
          <div className="card-body">
            <ul className="list-group mb-4">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>User ID:</strong> <span>{id}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Name:</strong> <span>{username}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Role:</strong> <span>{role}</span>
              </li>
            </ul>

            <h4 className="mb-4">
              <i className="fas fa-edit me-2"></i>Update Profile
            </h4>

            <div className="mb-3">
              <label className="form-label">
                <i className="fas fa-phone me-2"></i>Phone
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                <i className="fas fa-user me-2"></i>Bio
              </label>
              <textarea
                className="form-control"
                placeholder="Tell us about yourself"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                <i className="fas fa-cogs me-2"></i>Skills
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                <i className="fas fa-map-marker-alt me-2"></i>Location
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                <i className="fas fa-save me-2"></i>Update Profile
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;