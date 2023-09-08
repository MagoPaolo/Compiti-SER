const http = require('http')
const fs = require('fs')

let portNumber = process.argv[2]
let fileToRead = process.argv[3]

const server = http.createServer(function(request, response) {
    var stream = fs.createReadStream(fileToRead)
    stream.pipe(response)
});

server.listen(portNumber)