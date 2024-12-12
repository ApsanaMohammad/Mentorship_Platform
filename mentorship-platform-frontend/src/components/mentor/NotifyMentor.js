import React, { useEffect, useState } from 'react';

const NotifyMentor = () => {
  const [requests, setRequests] = useState([]);
  const mentorId = localStorage.getItem('id'); // Assuming the mentor's ID is stored in local storage

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`http://localhost:5226/api/notify/mentor/${mentorId}`);
        const data = await response.json();

        if (response.ok) {
          setRequests(data);
        } else {
          console.error(data.message);
          setRequests([]); // No requests found
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [mentorId]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Your Notifications</h2>
      {requests.length > 0 ? (
        requests.map((request) => (
          <div key={request.id} className="card shadow mb-4">
            <div className="card-body">
              <p><strong>Request ID:</strong> {request.id}</p>
              <p><strong>Mentee ID:</strong> {"Mentee with Id "+request.menteeId+" requested you"}</p>
              <p><strong>Status:</strong> {"you did not accept or reject the status is still "+request.status}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No requests found for you.</p>
      )}
    </div>
  );
};

export default NotifyMentor;
