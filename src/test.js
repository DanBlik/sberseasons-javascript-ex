const assert = require('assert');
const idealData = require('./result')
const myData = require('./index')

describe('Equals' , () => {
    it('should return undefined' , () => {
        typeof assert.deepStrictEqual(idealData, myData) === "undefined"
    })
})