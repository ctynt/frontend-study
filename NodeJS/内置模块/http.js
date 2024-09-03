const http = require('http')
const server = http.createServer((request,Response) => {
    Response.statusCode = 200
    Response.end('hello world')
})

server.listen(3300,()=> {
    console.log('服务器启动成功！http://localhost:3300')
})