const fs = require('fs')

let buffer = fs.readFileSync(process.argv[2])
let str = buffer.toString()
let strArray = str.split('\n')
console.log(strArray.length - 1)