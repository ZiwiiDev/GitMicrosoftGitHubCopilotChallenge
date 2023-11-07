// Create web server
// $ node comments.js
// Server running on http://localhost:3000/

// Path: comments.js
// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, world!</h1>');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
// $ node comments.js
// Server running on http://localhost:3000/

// Path: comments.js
// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, world!' }));
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
// $ node comments.js
// Server running on http://localhost:3000/

// Path: comments.js
// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, world!' }));
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
// $ node comments.js
// Server running on http://localhost:3000/

// Path: comments.js
// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(301, { 'Location': 'http://www.example.com/' });
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
// $ node comments.js
// Server running on http://localhost:3000/

// Path: comments.js
// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not found</h1>');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
}
