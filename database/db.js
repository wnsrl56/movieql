const { filter, take, entry } = require('../lib/fx');
const people = [
    {
        name: 'awrrt111',
        age: 31,
        gender: 'male',
        id: 0
    },
    {
        name: 'jun',
        age: 23,
        gender: 'male',
        id: 1
    },
    {
        name: 'jjjjj',
        age: 18,
        gender: 'male',
        id: 2
    },
    {
        name: 'llkkk',
        age: 135,
        gender: 'male',
        id: 3
    },
    {
        name: 'awekfmwapf',
        age: 245,
        gender: 'female',
        id: 4
    },
    {
        name: 'wefwagf',
        age: 34,
        gender: 'female',
        id: 5
    },
    {
        name: 'eakrnmvekamveprkmv',
        age: 32,
        gender: 'male',
        id: 6
    },
    {
        name: 'pempaemvpame',
        age: 18,
        gender: 'female',
        id: 7
    }
];

const getById = (iter, id) => entry(take(1, filter(iter, v => v.id === id)));
const db = { people, getById };

module.exports = db;
