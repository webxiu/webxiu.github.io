const express = require('express');
const app = express()

// https://www.bilibili.com/video/BV1wT4y1g788/?p=1&vd_source=0ff4a7894b0b330a6668a7b782cf0df7

app.get('/jsonp', (req, res) => {
    const { callback = Function.prototype } = req.query;
    const data = { code: 0, msg: '成功' }
    res.send(`${callback}(${JSON.stringify(data)})`)
})

app.listen('9000', () => {
    console.log('Jsonp服务启动在: http://localhost:9000')
})