import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/main/Login';
import Home from './components/main/Home';
import Register from './components/main/Register';
import MenteePage from './components/mentee/MenteePage';
import MentorPage from './components/mentor/MentorPage';
import PrivateRoute from './components/PrivateRoute';
import MentorSuggestions from './components/mentee/MentorSuggestions';
import Notes from './components/mentee/Notes';
import NotifyMentee from './components/mentee/NotifyMentee';
import NotifyMentor from './components/mentor/NotifyMentor';
import RequestMentor from './components/mentee/RequestMentor';
import About from './components/main/About';
import Contact from './components/main/Contact';
import Profile from './components/main/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);


  useEffect(() => {
    // Retrieve the saved user details from localStorage
    const savedRole = localStorage.getItem('role');
    const savedUsername = localStorage.getItem('username');
    const savedId = localStorage.getItem('id');
    // If the role is saved, set it in state
    setRole(savedRole);
    setUsername(savedUsername);
    setId(savedId);
  }, []);

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/mentor" element={<MentorPage />} />
          <Route path="/mentee" element={<MenteePage />} />
          <Route path="/mentor-suggestions" element={<MentorSuggestions />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/request-mentor" element={<RequestMentor />} />
          <Route path="/notify-mentee" element={<NotifyMentee/>} />
          <Route path="/notify-mentor" element={<NotifyMentor/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
