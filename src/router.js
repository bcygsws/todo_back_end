const express = require('express');
// a.拿到路由对象
const router = express.Router();
// b.引入路由处理函数文件
const service = require('./service');
// 1.获取todos列表
router.get('/todos', service.allTodos);

// c.导出路由模块，供app.js文件引入
module.exports = router;
