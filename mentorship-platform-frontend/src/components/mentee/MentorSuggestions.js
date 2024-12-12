import React, { useEffect, useState, useRef } from 'react';

const MentorSuggestions = () => {
  const [skills, setSkills] = useState('');
  const [mentors, setMentors] = useState([]);
  const [matchedMentors, setMatchedMentors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills) {
      setSkills(storedSkills);
    }
  }, []);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const url = skills
          ? 'http://localhost:5226/api/mentor/matchmentors'
          : 'http://localhost:5226/api/mentor/getmentors';

        const response = await fetch(url, {
          method: skills ? 'POST' : 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: skills ? JSON.stringify({ skills }) : null,
        });

        const data = await response.json();
        skills ? setMatchedMentors(data) : setMentors(data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();
  }, [skills]);

  const handleRequest = (mentorId) => {
    const menteeId = localStorage.getItem('id');

    fetch('http://localhost:5226/api/notify/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        mentorId: mentorId,
        menteeId: menteeId,
        status: "Pending"  // Ensure status is included
       }),
    })
      .then((response) => response.json())
      .then(() => {
        setShowModal(true);
      })
      .catch((error) => console.error('Error sending request:', error));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Mentor Suggestions</h2>

      {matchedMentors.length > 0
        ? matchedMentors.map((mentor) => (
            <div key={mentor.id} className="card shadow mb-4">
              <div className="card-body">
                <h4>{mentor.username}</h4>
                <p><strong>Bio:</strong> {mentor.bio}</p>
                <p><strong>Skills:</strong> {mentor.skills}</p>
                <button className="btn btn-primary" onClick={() => handleRequest(mentor.id)}>
                  Send Request
                </button>
              </div>
            </div>
          ))
        : mentors.length > 0
        ? mentors.map((mentor) => (
            <div key={mentor.id} className="card shadow mb-4">
              <div className="card-body">
                <h4>{mentor.username}</h4>
                <p><strong>Bio:</strong> {mentor.bio}</p>
                <p><strong>Skills:</strong> {mentor.skills}</p>
                <button className="btn btn-primary" onClick={() => handleRequest(mentor.id)}>
                  Send Request
                </button>
              </div>
            </div>
          ))
        : <p>No mentors available.</p>}

      {/* Bootstrap Modal for Notification */}
      {showModal && (
  <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" ref={modalRef}>
    <div className="modal-dialog">
      <div className="modal-content rounded-3 shadow-lg" style={{ maxWidth: '400px' }}>
        <div className="modal-header border-0">
          <h5 className="modal-title text-center" style={{ fontSize: '1.25rem', color: '#4CAF50' }}>Success</h5>
          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
        </div>
        <div className="modal-body text-center">
          <p className="fs-5">Your notification has been sent successfully!</p>
        </div>
        <div className="modal-footer border-0">
          <button type="button" className="btn btn-success w-100" onClick={() => setShowModal(false)}>
            Okay
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default MentorSuggestions;
