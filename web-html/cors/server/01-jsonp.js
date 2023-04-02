const express = require('express');
const app = express()

app.get('/jsonp', (req, res) => {
    const { callback = Function.prototype } = req.query;
    const data = { code: 0, msg: '成功' }
    res.send(`${callback}(${JSON.stringify(data)})`)
})

app.listen('9000', () => {
    console.log('Jsonp服务启动在: http://localhost:9000')
})