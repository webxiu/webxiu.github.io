const express = require('express');
const app = express();
const server = require('http').createServer(app); // .Server(app)
const socket = require("socket.io")(server, { cors: true });// 跨域访问
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));//设置静态(html)文件存放目录在public下
app.use("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
});

let connectCount = 0
socket.on("connection", client => {
    ++connectCount;
    console.log('连接成功', connectCount)
    // 发送消息
    let count = 0
    setInterval(() => {
        socket.emit('news', { hello: 'world', count: ++count });
    }, 3000);
    // 接收消息
    client.on("cEvent", msg => {
        console.log(`还有${connectCount}连接===>`, msg);
    });
    client.on("disconnect", function (msg) {
        --connectCount;
        console.log("客户端断开了连接", msg);
    });
});

const ws = server.listen(9009, function () {
    console.log('服务启动在:' + ws.address().port);
}); 