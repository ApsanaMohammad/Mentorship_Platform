import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="fas fa-graduation-cap"></i> Mentorship Platform
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  <i className="fas fa-user-plus"></i> Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  <i className="fas fa-info-circle"></i> About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  <i className="fas fa-envelope"></i> Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1>Welcome to the Mentorship Platform</h1>
          <p className="lead mt-3">
            Connect with experienced mentors and unlock your potential.
          </p>
          <a href="/register" className="btn btn-light btn-lg">
            Get Started <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About Our Platform</h2>
              <p>
                Our mentorship platform is designed to connect aspiring
                professionals with experienced mentors in various fields. We aim
                to bridge the knowledge gap and foster growth through guidance
                and support.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <i className="fas fa-users fa-5x text-primary"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Mentorship Platform By Apsana. All rights
            reserved.
          </p>
          <div className="mt-2">
            <a href="#" className="text-white mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
