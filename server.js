const http = require ('http')

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end('<h1>home</h1>')
    }
    else(res.end('<h1>URL desconhecida</h1>'))    
})

server.listen(1234, 'localhost', () =>{
    console.log('Server listening on port 1234')
})