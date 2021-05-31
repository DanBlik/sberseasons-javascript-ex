const cube = require('./data')
const resultData = require('./result')

const timer = require('./timer')
const handleBenchmark = require('./handleBenchmark')

const transformWithMapStep = require('./entries/convertWithMapStep/withMapStep')
const transformWithoutMapStepWithFuncs = require('./entries/convertWithoutMapStep/convertWithFuncs')
const transformWithoutMapStep = require('./entries/convertWithoutMapStep/withoutMapStep')
const transformWithReduce = require('./entries/convertDataWithReduce')

const iterations = 10

// 2ms with 10iters // 7-8ms with 100 iterations // 46-48ms with 10.000 iters
// const timer1 = timer('Transform with map step')
// handleBenchmark(transformWithMapStep, iterations, cube)
// timer1.stop()

//1-2ms with 10 iters // 7-8ms with 100 iters // 33-37ms with 10.000 iters
const timer2 = timer('Transform without map step and without using funcs')
handleBenchmark(transformWithoutMapStep, iterations, cube)
timer2.stop()

//1-2ms with 10 iters // 7-8ms with 100 iters // 47-49ms with 10.000 iters
const timer4 = timer('Transform without map step and with using funcs')
handleBenchmark(transformWithoutMapStepWithFuncs, iterations, cube)
timer4.stop()

//2ms with 10 iters // 9-10ms with 100 iters // 99-108ms with 10.000 iters
// const timer3 = timer('Transform data with reduce')
// handleBenchmark(transformWithReduce, iterations, cube)
// timer3.stop()