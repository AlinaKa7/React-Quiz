import axios from 'axios';

export default axios.create({
  baseURL: 'https://64f767d69d77540849538bc2.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});
