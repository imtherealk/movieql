import axios from "axios";

const BASE_URL = "https://yts-proxy.now.sh";
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};
