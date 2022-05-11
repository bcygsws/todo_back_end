const express = require('express');
// a.拿到路由对象
const router = express.Router();
// b.引入路由处理函数文件
const service = require('./service');
// 1.获取todos列表
router.get('/todos', service.allTodos);
// 添加一条列表
router.post('/todos/todo', service.addTodo);
// 删除一条记录
router.delete('/todos/todo/:id', service.delTodo);
// 更改某个复选框的状态
router.put('/todos/todo/:id/:isCompleted', service.changeTodo);
// 更改所有复选框的状态
router.put('/todos/:isCompleted', service.changeTodos);
// 清除选中的条目
router.delete('/todos', service.delTodos);
// c.导出路由模块，供app.js文件引入
module.exports = router;
