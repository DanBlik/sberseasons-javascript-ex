const idealData = require('../../result')
const cube = require('../../data')
const myData = require('./convertWithFuncs')
const assert = require('chai').assert

describe('Equals data' , () => {
    it('The example data is equal with result data after convert! Use convert WITHOUT map step' , () => {
        assert.deepEqual(myData(cube), idealData)
    })
})