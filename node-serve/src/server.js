const express = require('express');
const {
    PORT
} = require('./config.json');
const allRouter = require('./routers');

const app = express();

// 静态资源服务器
app.use(express.static('./'));

app.use(allRouter);

app.listen(PORT, () => {
    console.log(`服务器运行，端口号是 ${PORT}`);
})