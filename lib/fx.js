const filter = (iter, fn) => {
    const res = [];
    if (!iter[Symbol.iterator]) {
        return res;
    }
    for (const v of iter) {
        if (fn(v)) res.push(v);
    }
    return res;
};

const take = (index, iter) => {
    const res = [];
    if (!iter[Symbol.iterator]) {
        return res;
    }

    for (let i = 0; i < index; i++) {
        const iterObj = iter[Symbol.iterator]().next();
        const v = iterObj.value;
        if (iterObj.done) {
            break;
        }
        res.push(v);
    }
    return res;
};

const entry = v => (v.length ? v.reduce(v => v) : v);

const fx = {
    filter,
    take,
    entry
};
module.exports = fx;
