const { filter, take } = require('../lib/fx');
describe('should be including filter function', () => {
    test('variable is not empty', () => {
        expect(typeof filter).toBe('function');
        expect(typeof take).toBe('function');
    });
});

describe('check filter function', () => {
    describe('should be run correcly by calling', () => {
        const reflectSelf = v => v;

        test('should return empty array when non-iterable object in,', () => {
            const obj = {};
            expect(filter(obj, reflectSelf)).toEqual([]);
        });
        test('should return array, when iterable object in', () => {
            const array = [1, 2, 3, 4, 5];
            expect(filter(array, reflectSelf)).toEqual(array);
        });
    });
});

describe('check take function', () => {
    describe('should be run correcly by calling', () => {
        test('should return empty array when non-iterable object in,', () => {
            const obj = {};
            expect(take(1, obj)).toEqual([]);
        });
        test('should return array, when iterable object in', () => {
            const array = [1, 2, 3, 4, 5];
            expect(take(1, array)).toEqual([1]);
        });
    });
});
