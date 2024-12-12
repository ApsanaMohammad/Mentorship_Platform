import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  const contactMethods = [
    {
      title: 'Email Us',
      description: 'Send us an email for any inquiries or support.',
      icon: 'fas fa-envelope',
      link: 'mailto:support@mentorshipplatform.com',
      bgColor: 'bg-danger',
    },
    {
      title: 'Call Us',
      description: 'Reach us by phone for immediate assistance.',
      icon: 'fas fa-phone',
      link: 'tel:+1234567890',
      bgColor: 'bg-primary',
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team for quick responses.',
      icon: 'fas fa-comments',
      link: '/live-chat',
      bgColor: 'bg-success',
    },
    {
      title: 'Visit Us',
      description: 'Come to our office for face-to-face meetings.',
      icon: 'fas fa-map-marker-alt',
      link: 'https://goo.gl/maps/example',
      bgColor: 'bg-warning',
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 display-4">Get in Touch</h2>
      <p className="text-center mb-5 lead">
        We’re here to help! Choose the best way to connect with us.
      </p>

      <div className="row g-4">
        {contactMethods.map((method, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <a href={method.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div
                className={`card h-100 shadow-lg text-center ${method.bgColor} text-white border-0`}
                style={{ borderRadius: '15px', transition: 'transform 0.3s' }}
              >
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="mb-3">
                    <i className={`${method.icon} fa-3x`}></i>
                  </div>
                  <h5 className="card-title mb-3">{method.title}</h5>
                  <p className="card-text mb-4">{method.description}</p>
                  <button
                    className="btn btn-light text-dark fw-bold mt-auto"
                    style={{
                      borderRadius: '10px',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Contact Now
                  </button>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
