import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const PARAMS = {
  params: {
    api_key: '5928663a35cf4a3fefab8899a0242484',
  },
};

async function getTrendingFilmAPI(param) {
  const response = await axios.get(
    `${BASE_URL}trending/movie/${param}`,
    PARAMS
  );
  const data = response.data;
  return data;
}

async function getFilmDetailsAPI(movieId) {
  const response = await axios.get(`${BASE_URL}movie/${movieId}`, PARAMS);
  const data = response.data;
  return data;
}

async function getCreditsFilmAPI(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits`,
    PARAMS
  );
  const data = response.data;
  return data;
}

async function getReviewsFilmAPI(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews`,
    PARAMS
  );
  const data = response.data;
  return data;
}

async function getSearchFilmAPI(searchMovie) {
  const KEY = '5928663a35cf4a3fefab8899a0242484';
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${searchMovie}&page=1&include_adult=false`
  );
  const data = response.data;
  return data;
}

export {
  getTrendingFilmAPI,
  getCreditsFilmAPI,
  getFilmDetailsAPI,
  getReviewsFilmAPI,
  getSearchFilmAPI,
};
