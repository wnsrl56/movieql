const {
    map,
    filter,
    take,
    entry,
    reduce,
    curry,
    go,
    createIterable
} = require('../lib/fx');

describe('should be including filter function', () => {
    test('variable is not empty', () => {
        expect(typeof filter).toBe('function');
        expect(typeof take).toBe('function');
        expect(typeof entry).toBe('function');
        expect(typeof reduce).toBe('function');
        expect(typeof curry).toBe('function');
        expect(typeof map).toBe('function');
        expect(typeof createIterable).toBe('function');
    });
});

describe('check reduce function', () => {
    describe('should be run correcly by calling', () => {
        const reflectSelf = v => v;

        test('should put iterable acc value', () => {
            expect(reduce((a, b) => a + b, 30, [10, 20])).toBe(60);
            expect(reduce((a, b) => a + b, [10, 20])).toBe(30);
        });
        test('should return array, when iterable object in', () => {});
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
            expect(take(10, obj)).toEqual([]);
        });
        test('should return array, when iterable object in', () => {
            const array = [1, 2, 3, 4, 5];
            expect(take(-1, array)).toEqual([]);
            expect(take(1, array)).toEqual([1]);
            expect(take(3, array)).toEqual([1, 2, 3]);
            expect(take(5, array)).toEqual([1, 2, 3, 4, 5]);
            expect(take(1305, array)).toEqual([1, 2, 3, 4, 5]);
        });
    });
});

describe('check entry function', () => {
    describe('should be run correcly by calling', () => {
        test('should return empty array when non-iterable object in,', () => {
            const obj = {};
            expect(take(1, obj)).toEqual([]);
        });
        test('should return inner value', () => {
            const item = [{ arr: [1, 2, 3, 4, 5] }, { arr: [1, 2, 3, 4, 5] }];
            expect(entry(take(1, item))).toEqual({ arr: [1, 2, 3, 4, 5] });
            expect(entry(item)).toEqual(item);
            expect(entry({})).toEqual({});
        });
    });
});

describe('check curry function', () => {
    describe('should be run correcly by calling', () => {
        test('should return cached function', () => {
            const list = [1, 2, 3, 4, 5];
            expect(curry(take)(1, list)).toEqual(take(1, list));

            const curriedTake = curry(take);
            const curriedTakeAll = curriedTake(Infinity);
            expect(curriedTake(1, list)).toEqual(take(1, list));
            expect(curriedTakeAll(list)).toEqual(take(10, list));
        });
    });
});

describe('check go function', () => {
    describe('should run correcly by calling', () => {
        test('should run functions immediately', () => {
            const list = [1, 2, 3, 4, 5];
            const curriedTake = curry(take);
            const curriedTakeAll = curriedTake(Infinity);
            expect(go([1, 2, 3], curriedTakeAll)).toEqual([1, 2, 3]);
        });
    });
});

describe('check map function', () => {
    describe('should run correcly by calling', () => {
        test('should return array', () => {
            expect(map(v => v, [10, 20, 30])).toEqual([10, 20, 30]);
            expect(map([10, 20, 30])).toEqual([]);
            expect(map(v => v)).toEqual([]);
        });

        test('should input iterable items', () => {
            expect(map(v => v, { 1: 1, 2: 2, 3: [1, 2, 3, 4] })).toEqual([]);
            expect(
                map(v => v, createIterable({ a: 1, b: 2, c: [1, 2, 3, 4] }))
            ).toEqual([1, 2, [1, 2, 3, 4]]);

            expect(map(v => v, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        });

        test('should return array containing evaluated items', () => {
            expect(map(v => v + 10, [10, 20, 30])).toEqual([20, 30, 40]);
            expect(map(v => `${v} is not good`, ['test'])).toEqual([
                `test is not good`
            ]);
        });
    });
});
