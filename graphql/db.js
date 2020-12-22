import fetch from "node-fetch";

const BASE_URL = "https://yts-proxy.now.sh";
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json?`;

export const getMovies = (limit, rating) => {
  let REQUEST_URL = LIST_MOVIES_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => {
      return json.data.movies;
    });
};
