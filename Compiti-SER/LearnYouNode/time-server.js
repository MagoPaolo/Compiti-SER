const net = require('net')

let portNumber = process.argv[2]

const server = net.createServer(function (socket) {

    let date = new Date()
    let year   = date.getFullYear()
    let month  = addZero(date.getMonth() + 1)
    let day    = addZero(date.getDate())
    let hour   = addZero(date.getHours())
    let minute = addZero(date.getMinutes())
    let dataComplete = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
    socket.end(dataComplete + '\n')
})

server.listen(portNumber) 

function addZero(number) {
    if (number < 10) {
        number = '0' + number
    }
    return number
}