import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
    movieList: (_, { ids }) => {
      let filtered = [];
      ids.forEach((id) => {
        const movie = getById(id);

        if (movie !== undefined) {
          filtered.push(movie);
        }
      });
      return filtered;
    },
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
