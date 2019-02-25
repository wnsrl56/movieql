const { people, getById } = require('../database/db.js');
const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => {
            return getById(people, id);
        }
    }
};
module.exports = resolvers;
