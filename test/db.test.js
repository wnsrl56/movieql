const { getById, people: list } = require('../database/db');

describe('should be including function', () => {
    test('variable is not empty', () => {
        expect(typeof getById).toBe('function');
    });
});

describe('should be run corretly', () => {
    test('should be return empty array when it can not find value', () => {
        expect(getById(list, 20)).toEqual([]);
    });
});
