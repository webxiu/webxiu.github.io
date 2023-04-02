const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express()

const CONFIG = {
    //=>WEB服务端口号
    PORT: 9001,
    //=>CORS跨域相关信息
    CORS: {
        ALLOW_ORIGIN: "http://localhost:81",
        ALLOW_METHODS: "PUT, POST, GET, DELETE, OPTIONS, HEAD",
        HEADERS: "Content-Type, Content-Length, Authorization, Accept, X-Requeste-With",
        CREDENTIALS: true,
    },
    //=>SESSION存绪相关信急
    SESSION: {
        secret: "ZFPX",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 30,
        },
    },
};

app.use((req, res, next) => {
    const { ALLOW_ORIGIN, CREDENTIALS, HEADERS, ALLOW_METHODS } = CONFIG.CORS;
    res.header("Access-Control-Allow-Origin", ALLOW_ORIGIN);
    res.header("Access-Control-Allow-Credentials", CREDENTIALS);
    res.header("Access-Control-Allow-Headers", HEADERS);
    res.header("Access-Control-Allow-Methods", ALLOW_METHODS);
    req.method === 'OPTIONS' ? res.send('200') : next()
});
app.use(session(CONFIG.SESSION));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/cors', (req, res) => {
    const { page, pageSize } = req.query;
    const body = req.body
    const data = { code: 0, msg: '成功', data: { ...body, ...req.query } }
    res.send(JSON.stringify(data))
})

app.listen(CONFIG.PORT, () => {
    console.log(`cros服务启动在: http://localhost:${CONFIG.PORT}`)
})