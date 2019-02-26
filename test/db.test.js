const { getById, getMovies } = require('../database/db');

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
    test('should be return empty array when it can not find value', () => {
        expect(getById(this.list, 1)).toEqual([]);
    });
});
