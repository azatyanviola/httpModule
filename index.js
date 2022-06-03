'use strict';

import http, { createServer } from 'http';
import fs from 'fs';
import path from 'path';

// const server = createServer((req, res) =>{
//     if(req.url === '/'){
//         res.writeHead(200, {'Content-type': 'text/plain'});
//         res.end('Hello World');
//     }else if(req.url === '/welcome'){
//        res.writeHead(200, {'Content-type': 'text/plain'});
//        res.end('Welcome to my webside');
//     }else if(req.url === '/json'){
//         res.writeHead(200, {'Content-type': 'application/json'});
//         res.end(JSON.stringify({
//             name:'Jane'
//         }));
//     }else{
//         res.writeHead(404, {'Content-type': 'text/plain'});
//         res.end('Data not found');
//     }
// });

// server.listen(3001);

//**Create a stream to html */

const server1 = createServer((req, res) =>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.ReadStream(path.resolve('home/index.html')).pipe(res);

    }else if(req.url === '/style.css'){
        res.writeHead(200, {'Content-type': 'text/css'});
        fs.ReadStream(path.resolve('home/style.css')).pipe(res);
        
    }else if(req.url === '/welcome'){
       res.writeHead(200, {'Content-type': 'text/plain'});
       res.end('Welcome to my webside');
    }else if(req.url === '/json'){
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify({
            name:'Jane'
        }));
    }else{
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end('Data not found');
    }
});

server1.listen(3001);

//***Forwarding***/

// http.createServer((request, response) => {
     
//     response.setHeader('Content-Type', 'public/html; charset=utf-8;');
     
//     if(request.url === '/'){
//         response.statusCode = 302; 
//         response.setHeader('Location', '/newpage');
//     }else if(request.url == '/newpage'){
//         response.write('New address');
//     }else{
//         response.statusCode = 404; 
//         response.write('Not Found');
//     }
//     response.end();
// }).listen(3001);


