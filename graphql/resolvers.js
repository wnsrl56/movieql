const { getMovies, getById } = require('../database/db.js');
const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => {
            return getById(getMovies(), id);
        }
    }
};
module.exports = resolvers;
