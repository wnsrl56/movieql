const { people } = require('../database/db.js');
const resolvers = {
    Query: {
        people: () => people
    }
};
module.exports = resolvers;
