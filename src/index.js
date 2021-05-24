const cube = require('./data')
const resultData = require('./result')

const timer = require('./timer')
const handleBenchmark = require('./handleBenchmark')

const transformWithMapStep = require('./withMapStep')
const transformWithoutMapStep = require('./withoutMapStep')


const timer1 = timer('Transform with map step')
handleBenchmark(transformWithMapStep, 1000, cube)
timer1.stop()

const timer2 = timer('Transform without map step')
handleBenchmark(transformWithoutMapStep, 1000, cube)
timer2.stop()