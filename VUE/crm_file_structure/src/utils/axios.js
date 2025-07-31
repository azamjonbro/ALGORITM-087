import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 50000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Authorization": `Bearer ${localStorage.getItem('token') || ''}` // Use token from localStorage if available
  }
});

export default instance;