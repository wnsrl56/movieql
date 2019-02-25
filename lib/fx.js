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
const fx = {
    filter
};
module.exports = fx;
