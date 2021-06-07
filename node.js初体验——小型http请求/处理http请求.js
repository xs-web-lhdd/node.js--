var http = require('http');

var sever = http.createServer(function() {
    console.log('已经收到http请求！');
});

sever.listen(3000);
console.log('已经发出请求，端口号是3000，请访问 http://localhost:3000');