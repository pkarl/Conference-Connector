var http = require('http');

app.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

// app.listen(process.env.NODE_ENV === 'production' ? 80 : 8000, function() {
//   console.log('Ready');
// 
//   // if run as root, downgrade to the owner of this file
//   if (process.getuid() === 0) {
//     require('fs').stat(__filename, function(err, stats) {
//       if (err) { return console.log(err); }
//       process.setuid(stats.uid);
//     });
//   }
// });