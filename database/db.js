const { filter, take, entry, curry, go } = require('../lib/fx');
let { movies } = require('./mockup.json');

const getMovies = () => movies;
const setMovies = (list) => {
    movies = new Object(list);
    return true;
}
let P = {};
P.filter = curry(filter);
P.take = curry(take);

const find = curry((fn, iter) => go(iter, P.filter(fn), P.take(1), entry));
const getById = id => go(getMovies(), find(v => v.id === id));
const deleteMovieById = id => go(getMovies(), P.filter(v => v.id !== id), (filtered) => (getMovies().length > filtered.length ? setMovies(filtered) : false));
const db = { getMovies, getById, find, deleteMovieById };
module.exports = db;
