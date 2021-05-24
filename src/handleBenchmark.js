const handleBencmark = (fn, count, fnArg) => {
    for (let i = 0; i < count; i++) {
        fn(fnArg)
    }
}

module.exports = handleBencmark