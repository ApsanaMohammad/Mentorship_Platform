import React, { useEffect, useState } from 'react';

const MenteeRequestsForMentor = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mentorId = localStorage.getItem('id'); // Get mentor ID from localStorage
  const token = localStorage.getItem('jwt'); // Get JWT token from localStorage

  // Fetch mentee requests when the component mounts
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(`http://localhost:5226/api/MentorshipRequest/mentor/${mentorId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
        });
   
        if (!response.ok) {
          throw new Error('Failed to fetch mentee requests');
        }
   
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching mentee requests:', error);
        setError('Failed to fetch mentee requests');
        setRequests([]);
      } finally {
        setLoading(false); // Stop loading once the data is fetched or error occurs
      }
    };
   

    fetchRequests();
  }, [mentorId, token]);

  // Handle Accept or Reject action for mentor
  const handleAction = async (requestId, action) => {
    try {
      const response = await fetch(`http://localhost:5226/api/MentorshipRequest/mentor/accept-reject/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ action }), // Send action as an object (accept or reject)
      });

      const result = await response.json();
      if (response.ok) {
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.id === requestId ? { ...request, status: action === 'accept' ? 'Accepted' : 'Rejected' } : request
          )
        );
        alert(result.message); // Show success message
      } else {
        alert(result.message); // Show error message
      }
    } catch (error) {
      console.error('Error handling action:', error);
    }
  };


  // Rendering
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Mentee Requests</h2>
      {loading && <p className="text-center">Loading mentee requests...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      {requests.length > 0 ? (
        requests.map((request) => (
          <div key={request.id} className="card shadow mb-4">
            <div className="card-body">
              <p><strong>Request ID:</strong> {request.id}</p>
              <p><strong>Mentee ID:</strong> {"Mentee with Id "+request.menteeId+" requested you"}</p>
              <p><strong>Status:</strong> {"You "+request.status+" the Mentee request"}</p>
              {request.status === 'Pending' && (
                <div>
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => handleAction(request.id, 'accept')}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleAction(request.id, 'reject')}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        !loading && <p className="text-center">No mentee requests available.</p>
      )}
    </div>
  );
};

export default MenteeRequestsForMentor;
