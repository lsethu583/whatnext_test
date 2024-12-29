// src/services/apiService.js
import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:3000';

const apiService = {
  signup: (data) => axios.post(`${API_URL}/signup`, data),
  login: (data) => axios.post(`${API_URL}/login`, data),

//   //get exaxple
//     getCourse: (data) => axios.get(`${API_URL}/getCourse/${data}`,data)
//   getProfile: (token) =>
//     axios.get(`${API_URL}/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }),
};

export default apiService;
