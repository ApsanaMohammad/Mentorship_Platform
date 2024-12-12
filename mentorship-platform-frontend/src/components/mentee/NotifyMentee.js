import React, { useEffect, useState } from 'react';

const NotifyMentee = () => {
  const [requests, setRequests] = useState([]);
  const menteeId = localStorage.getItem('id'); // Assuming the mentee's ID is stored in local storage

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`http://localhost:5226/api/notify/mentee/${menteeId}`);
        const data = await response.json();

        if (response.ok) {
          setRequests(data);
        } else {
          console.error(data.message);
          setRequests([]); // No notifications found
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [menteeId]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Your Notifications</h2>
      {requests.length > 0 ? (
        requests.map((request) => (
          <div key={request.id} className="card shadow mb-4">
            <div className="card-body">
              <p><strong>Request ID:</strong> {request.id}</p>
              <p><strong>Mentor ID:</strong> {request.mentorId}</p>
              <p><strong>Status:</strong> {request.status}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No notifications available.</p>
      )}
    </div>
  );
};

export default NotifyMentee;
