const { getById, getMovies, find } = require('../database/db');

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
