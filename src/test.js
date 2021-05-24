const idealData = require('./result')
const cube = require('./data')
const myData = require('./convertDataWithReduce')
const assert = require('chai').assert

describe('Equals data' , () => {
    it('The example data is equal with result data after convert!' , () => {
        assert.deepEqual(myData(cube), idealData)
    })
})

