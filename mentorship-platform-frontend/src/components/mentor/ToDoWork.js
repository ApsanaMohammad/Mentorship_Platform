import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoWork = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-primary">
        <i className="fas fa-check-circle me-2"></i> To-Do Work
      </h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-center">Here are your tasks:</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Task 1:</strong> Complete the profile setup
            </li>
            <li className="list-group-item">
              <strong>Task 2:</strong> Review mentee progress
            </li>
            <li className="list-group-item">
              <strong>Task 3:</strong> Update your skills
            </li>
          </ul>
          <div className="text-center mt-4">
            <button className="btn btn-success">
              <i className="fas fa-sync-alt me-2"></i> Refresh Tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoWork;
