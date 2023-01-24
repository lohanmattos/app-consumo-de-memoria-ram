const http = require('http');
const stats = require('./pcRamUsage');

const host = 'http://localhost';
const port = 3000

http.createServer(function (req, res){
    res.end(JSON.stringify(stats, null, 2));
 
}).listen(port, () => {
    console.log(`server listening on port ${host}:${port}`);
} );