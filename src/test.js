const idealData = require('./result')
const myData = require('./index')
const assert = require('chai').assert

describe('Equals data' , () => {
    it('The example data is equal with result data after convert!' , () => {
        assert.deepEqual(myData, idealData)
    })
})

