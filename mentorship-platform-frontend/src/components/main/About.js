import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: 'For Mentors',
      description: 'Share your expertise, guide mentees, and grow your network.',
      icon: 'fas fa-user-tie',
      link: '/mentor',
      bgColor: 'bg-success',
    },
    {
      title: 'For Mentees',
      description: 'Learn from experienced mentors and accelerate your growth.',
      icon: 'fas fa-user-graduate',
      link: '/mentee',
      bgColor: 'bg-info',
    },
    {
      title: 'Flexible Schedules',
      description: 'Work with mentors and mentees at your own pace.',
      icon: 'fas fa-calendar-check',
      link: '/class-schedule',
      bgColor: 'bg-warning',
    },
    {
      title: 'Notifications',
      description: 'Stay updated with the latest activities and requests.',
      icon: 'fas fa-bell',
      link: '/notifications',
      bgColor: 'bg-primary',
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 display-4">About Our Mentorship Platform</h2>
      <p className="text-center mb-5 lead">
        Our platform connects mentors and mentees to foster growth, knowledge sharing, and career development.
      </p>

      <div className="row g-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div
              className={`card h-100 shadow-lg text-center ${benefit.bgColor} text-white border-0`}
              style={{ borderRadius: '15px' }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <div className="mb-3">
                  <i className={`${benefit.icon} fa-3x`}></i>
                </div>
                <h5 className="card-title mb-3">{benefit.title}</h5>
                <p className="card-text mb-4">{benefit.description}</p>
                <button
                  className="btn btn-light text-dark fw-bold mt-auto"
                  style={{
                    borderRadius: '10px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={() => navigate(benefit.link)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Text Below the Cards */}
      <div className="mt-5 text-center">
        <p className="lead">
          Join our community of mentors and mentees who believe in mutual growth and shared learning.
        </p>
        <p>
          Our platform offers personalized guidance, ensuring that every mentee finds the right mentor.
        </p>
        <p>
          Mentors can enhance their leadership skills while contributing to the success of future professionals.
        </p>
        <p>
          We provide seamless communication tools and flexible scheduling to suit your needs.
        </p>
        <p>
          Start your journey today and be part of a vibrant mentorship ecosystem that thrives on collaboration.
        </p>
      </div>
    </div>
  );
};

export default About;
