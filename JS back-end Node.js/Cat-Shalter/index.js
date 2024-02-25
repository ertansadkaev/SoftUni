const { log } = require('console');
const http = require ('http');
const homeHtml = require ('./views/home.html');
const styleCss = require ('./views/site.css');
const addCatHtml = require ('./views/addCat.html');
const addBreedHtml = require ('./views/addBreed.html');

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(homeHtml);
        res.end(); 
    }
    else if (req.url === "/styles/site.css"){
        res.writeHead(200, {
            'content-type': 'text/css'
        })
        res.write(styleCss);
        res.end();
    }
    else if (req.url === "/cats/add-cat"){
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(addCatHtml);
        res.end();
    } 
    else if (req.url === "/cats/add-breed"){
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(addBreedHtml);
        res.end();
    } else {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('<h1>404</h1>');
    }
})

server.listen(5000);
console.log("server is listening in port 5000...");