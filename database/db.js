const { filter, take, entry } = require('../lib/fx');
const { movies } = require('./mockup.json');

const getMovies = () => movies;
const getById = (iter, id) => entry(take(1, filter(iter, v => v.id === id)));
const db = { getMovies, getById };

module.exports = db;
