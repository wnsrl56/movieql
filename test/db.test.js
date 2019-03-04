const { getById, getMovies, deleteMovieById, find } = require('../database/db');

describe('should be including function', () => {
    test('variable is not empty', () => {
        expect(typeof getById).toBe('function');
    });
});

describe('should be run corretly', () => {
    beforeEach(() => {
        this.list = getMovies();
    });
    test('should get movie list from getMovies function', () => {
        expect(this.list instanceof Array).toBe(true);
    });
    describe('shuld find values suing find function', () => {
        expect(getById(8462).title).toBe('Avengers: Infinity War');
    });
    test('should be return empty array when it can not find value', () => {
        expect(getById(1)).toEqual([]);
    });
});

describe('should check crud logic', () => {
    test('should remove movie by id with deleteMovieById function', () => {
        expect(deleteMovieById(8462)).toBe(true);
        expect(getById(8462)).toEqual([]);
    });
    test('should return false, if the movie object can not remove', () => {
        expect(deleteMovieById(1)).toBe(false);
        expect(getById(1)).toEqual([]);
    });
});