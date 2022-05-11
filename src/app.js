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
// const cors = require('cors');
// app.use(cors({ origin: '*', credentials: true }));
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
// 2.使用中间件手动配置，注意：第二种方式，要放在路由处理之前，否则不起作用
app.all('*', (req, res, next) => {
	// 跨域情形一：单个跨域，明确写需要跨域的那个域名；或者Allow-Origin 设定为*，表示通配符，是允许所有跨域访问
	// res.header('Access-Control-Allow-Origin', '*');
	// 跨域情形二、有限多个域名跨域，使用数组,req.headers.origin可以拿到前端发起跨域请求的域名
	const orgList = ['http://localhost:3000', 'http://localhost:8080'];
	if (orgList.includes(req.headers.origin)) {
		// 判断前端请求的域名，是否在允许的数组中
		res.header('Access-Control-Allow-Origin', req.headers.origin);
	}
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET,OPTIONS');
	res.header('Access-Control-Max-Age', 1728000); // 预请求缓存时间设置：1728000，单位秒，20天
	next();
});

app.use(router);
const port = 3001;
app.listen(port, () => {
	console.log('app listening on port:' + port);
});
