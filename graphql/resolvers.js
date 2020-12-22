import { getMovies, getById, addMovie } from "./db";

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
  },
};

export default resolvers;
