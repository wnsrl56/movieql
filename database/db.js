const { filter, take, entry, curry, go } = require('../lib/fx');
const { movies } = require('./mockup.json');

const getMovies = () => movies;
let P = {};
P.filter = curry(filter);
P.take = curry(take);

const find = curry((fn, iter) => go(iter, P.filter(fn), P.take(1), entry));
const getById = id => go(getMovies(), find(v => v.id === id));
const db = { getMovies, getById, find };
module.exports = db;
