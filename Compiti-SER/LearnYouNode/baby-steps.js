const { argv } = require('node:process')

let sum = 0

argv.forEach((val, index) => {
    if (index > 1) {
        sum = Number(val) + sum
    }
})

console.log(sum)