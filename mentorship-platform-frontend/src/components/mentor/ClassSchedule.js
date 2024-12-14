import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClassSchedule = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-primary">
        <i className="fas fa-calendar-alt me-2"></i> Class Schedule
      </h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-center">Upcoming Classes:</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Monday:</strong> JavaScript Basics - 10:00 AM to 12:00 PM
            </li>
            <li className="list-group-item">
              <strong>Wednesday:</strong> React Fundamentals - 2:00 PM to 4:00 PM
            </li>
            <li className="list-group-item">
              <strong>Friday:</strong> Web Development Best Practices - 11:00 AM to 1:00 PM
            </li>
          </ul>
          <div className="text-center mt-4">
            <button className="btn btn-info">
              <i className="fas fa-sync-alt me-2"></i> Refresh Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
