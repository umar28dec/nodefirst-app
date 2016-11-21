var http = require('http');
var fs = require('fs');
http.createServer(onRequest).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');

function onRequest(req, res) {
    if(req.method=='GET' && req.url=='/'){
        res.writeHead(200,{'content-Type':'text/html'})
        fs.createReadStream("./index.html").pipe(res);
    }else{
       errot404(res); 
    }

}

function errot404(res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write("Not Fount 404")
    res.end('');
}
