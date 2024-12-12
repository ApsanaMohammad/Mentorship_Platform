import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role'); // Fetch role from localStorage

  // If not authenticated, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the appropriate Outlet (child routes)
  return <Outlet />;
};

export default PrivateRoute;
