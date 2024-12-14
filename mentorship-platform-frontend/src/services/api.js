import axios from 'axios';
import environment from '../environment.json'; // Import the environment configuration

// Create Axios instance with dynamic base URL
const api = axios.create({
  baseURL: environment.apiBaseUrl, // Use the URL from environment.json
});

// Set the authentication token in the request headers
export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
}

// Clear the token and log the user out
export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  setAuthToken(null);
  window.location.href = '/login';
}

export default api;
