import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '229fbe9d63b5c8a5f0b4044564440235';

export const getTrendigs = async (params = {}, signal) => {
  console.log(signal);
  const response = await axios.get('trending/movie/day', {
    params: {
      page: 1,
      api_key: API_KEY,
      ...params,
    },
    signal,
  });
  return response.data.results;
};

// const KEY = '229fbe9d63b5c8a5f0b4044564440235';
// const LANGUAGE = 'ru-RU';
// const QUERY = 'q';
// const PAGE = 1;
// const INCLUDE_ADULT = true;
// const BASE_URL = 'https://api.themoviedb.org/3/';
// const ORIENTATION = 'all';
// const IMGTYPE = 'all';

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

//  export const getSearchMovies = () => {
//   return(`search/movie?api_key=${KEY}&query=${QUERY}&page=${PAGE}&language=${LANGUAGE}include_adult=${INCLUDE_ADULT}`;)
//   return axios.get(queryString);
// };

//  const queryString = `${ BASE_URL}search/movie?api_key=${KEY}&query=${QUERY}&page=${PAGE}&language=${LANGUAGE}include_adult=${INCLUDE_ADULT}`;
//  return axios.get(queryString);
// };

// const apiService = new MovieApiService();

// export default apiService;
// //!!----------------------------------------------------------------------
// export const getTrendigs = () => {
//   return axios.get(`trending/movie/week?api_key=${this.KEY}`);
// };
// //!!------------------------------------------------------------------------------------------

//  export const MovieDetails  = params => {
//   const { id: movie_id, language = LANGUAGE } = params;
//   return axios.get(
//     `/movie/${movie_id}?api_key=${API_KEY}&language=${language}`
//   );
// };

// export const getSearchMovies = () => {
//   return;
//   return axios.get(queryString);
// };

//   // search
//   const queryString = `search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=${language}include_adult=${include_adult}`;

//   return axios.get(queryString);
// };

// export const getMoviesCast = params => {
//   const { id: movie_id, language = LANGUAGE } = params;
//   return axios.get(
//     `/movie/${movie_id}/credits?api_key=${API_KEY}&language=${language}`
//   );
// };

// export const getMoviesReview = params => {
//   const { id: movie_id, language = LANGUAGE } = params;
//   return axios.get(
//     `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=${language}`
//   );
// };
