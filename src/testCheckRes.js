const assert = require('assert');

const checkRes = (src, dist) => {
    if (typeof assert.deepStrictEqual(src, dist) === "undefined") {
        return console.log("Congrats! The data is equal.")
    }
}

module.exports = checkRes