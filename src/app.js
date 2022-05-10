/**
 *
 * @ app.js 入口文件
 *
 */
const express = require('express');
const app = express();
// 引入路由模块
const router = require('./router');
const bodyParser = require('body-parser');
// 1.1 引入跨域资源共享模块
const cors = require('cors');
app.use(cors({ origin: '*', credentials: true }));
// 引入body-parser模板，解析json或提交的数据，格式化为application/x-www-form-urlencoded
// 静态文件托管,express的中间件函数express.static
app.use('/', express.static('public'));
// 解析数据格式中间件bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 跨域有两种实现方式
// 1.使用cors模块
// 1.1 引入
// 1.2 app.use方法引入
app.use(router);
const port = 3001;
app.listen(port, () => {
	console.log('app listening on port:' + port);
});
