import React, { useEffect, useState } from 'react';
import api from '../../services/api'; // Import the API service

const NotifyMentee = () => {
  const [requests, setRequests] = useState([]);
  const menteeId = localStorage.getItem('id'); // Assuming the mentee's ID is stored in local storage

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await api.get(`/notify/mentee/${menteeId}`); // Use Axios to make the request
        const data = response.data; // Axios response data is directly accessible here

        if (response.status === 200) {
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
              
              <p><strong>Status:</strong> {
                request.status.toLowerCase() === 'accepted' 
                ? 'Your request has been accepted by the mentor!' 
                : request.status.toLowerCase() === 'rejected' 
                ? 'Your request has been rejected by the mentor!' 
                : `The status is still pending. You have not been accepted or rejected yet.`
              }</p>
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
