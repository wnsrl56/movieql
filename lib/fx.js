const isIterable = v => v && v[Symbol.iterator];
const isPositive = v => v >= 0;
const not = b => !b;
const curry = f => (a, ...more) =>
    more.length ? f(a, ...more) : (...more) => f(a, ...more);

const reduce = curry((fn, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const item of iter) {
        acc = fn(acc, item);
    }
    return acc;
});

const entry = v => (v.length === 1 ? reduce(v => v, v) : v);
const go = (...args) => reduce((v, fn) => fn(v), args);

const map = (fn, iter) => {
    const res = [];
    if (not(isIterable(iter))) {
        return res;
    }
    for (const v of iter) {
        res.push(fn(v));
    }
    return res;
};

const filter = (fn, iter) => {
    const res = [];
    if (not(isIterable(iter))) {
        return res;
    }
    for (const v of iter) {
        if (fn(v)) res.push(v);
    }
    return res;
};

const take = (l, iter) => {
    const res = [];
    if (not(isIterable(iter)) || not(isPositive(l))) {
        return res;
    }
    for (const v of iter) {
        res.push(v);
        if (res.length === l) {
            return res;
        }
    }
    return res;
};

const objectGenerator = function*(obj) {
    for (const key in obj) yield obj[key];
};

const createIterable = obj => {
    this.iter = objectGenerator(obj);
    return {
        length: Object.keys(obj).length,
        [Symbol.iterator]: function() {
            return this;
        },
        next: () => this.iter.next()
    };
};

const fx = {
    map,
    filter,
    take,
    entry,
    reduce,
    curry,
    go,
    createIterable
};
module.exports = fx;
