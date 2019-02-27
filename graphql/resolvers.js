const { getMovies, getById } = require('../database/db.js');
const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => {
            const getMovieById = getById(getMovies());
            return getMovieById(1);
        }
    }
};
module.exports = resolvers;
