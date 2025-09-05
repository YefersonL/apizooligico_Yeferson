'use strict';
const http = requiere('http');

const server = http.createserver(function(req, res){
    res.writehead(200, { 'content-type': 'text/plain' });
    res.end('Hola Mundo');

});
server.listen(5000);
