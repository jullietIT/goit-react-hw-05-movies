import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '229fbe9d63b5c8a5f0b4044564440235';

export const getSearchMovies = async request => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${request}`
  );
  return response.data;
};

export const getTrendigs = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getDetailsMovies = async id => {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getCastsMovies = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const getReviewsMovies = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
};
