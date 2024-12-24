import axios from 'axios';

// Reemplazo con URL de Render:
const API = axios.create({
  baseURL: 'https://fravega-backend.onrender.com'
});

export default API;
