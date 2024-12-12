import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5226/api', // Update with your .NET Core API URL
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
