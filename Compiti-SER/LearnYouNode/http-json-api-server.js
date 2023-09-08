const http = require('http')
const url  = require('url')

let portNumber = process.argv[2]

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    
    let Obj = url.parse(req.url, true)
    
    let route = Obj.pathname;
    let date = new Date(Obj.query.iso)
    
    if (route == '/api/parsetime') {
        var data = formatDate(date)
    } else if(route == '/api/unixtime') {
        var data = formateUnix(date)
    }
    
    res.end(JSON.stringify(data))
})

server.listen(portNumber)

function formatDate(date) {
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
}

function formateUnix(date) {
    return {
        unixtime: date.getTime()
    }
}