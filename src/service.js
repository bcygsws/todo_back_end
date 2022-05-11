const db = require('./db');
// 1.获取todos列表数据
exports.allTodos = (req, res) => {
	const sql = 'select * from todo order by id ASC';
	db.base(sql, null, (results) => {
		res.json(results);
	});
};
// 2.向列表中添加一条信息
exports.addTodo = (req, res) => {
	const sql = 'insert into todo set?';
	const info = req.body;
	console.log(info);
	const data = { title: info.title, isCompleted: info.isCompleted };
	db.base(sql, data, (results) => {
		if (results.affectedRows === 1) {
			console.log(sql + '成功添加一条记录');
			res.json({
				msg: '成功添加一条记录',
				code: 200
			});
		} else {
			res.json({
				msg: '请求错误',
				code: 400
			});
		}
	});
};
// 向todo列表中删除一条数据
exports.delTodo = (req, res) => {
	const id = req.params.id;
	const sql = 'delete from todo where id=?';
	db.base(sql, [id], (results) => {
		if (results.affectedRows === 1) {
			console.log(sql + '成功删除1条记录');
			res.json({
				msg: '成功删除1条记录',
				code: 200
			});
		} else {
			res.json({
				msg: '删除记录失败',
				code: 400
			});
		}
	});
};
// 更改一条记录
exports.changeTodo = (req, res) => {
	const info = req.params;
	const data = [info.isCompleted, info.id];
	const sql = 'update todo set isCompleted=? where id=?';
	db.base(sql, data, (results) => {
		if (results.affectedRows === 1) {
			console.log(sql + '成功修改了1条记录');
			res.json({
				code: 200,
				msg: '成功修改了1条记录'
			});
		} else {
			res.json({
				code: 400,
				msg: '修改记录失败'
			});
		}
	});
};
// 更改所有记录的复选状态
exports.changeTodos = (req, res) => {
	const flag = req.params.isCompleted;
	const sql = 'update todo set isCompleted=?';
	db.base(sql, [flag], (results) => {
		console.log(results);
		console.log(sql + '成功更改了所有复选框的选中状态');
		res.json({
			code: 200,
			msg: '成功更改了所有复选框的选中状态'
		});
	});
};
exports.delTodos = (req, res) => {
	console.log(req);
	const info = req.body; // info是那些保留的数组记录对象
	console.log(info);
	let idArr = [];
	info.map((item) => {
		idArr.push(item.id);
	});
	const str = idArr.join(',');
	console.log(str);
	// 例子：id not in(1,2,5) 表示有奥删除todo表中id不是这1,2,5的
	const sql = 'delete from todo where id not in(' + str + ')';
	db.base(sql, null, (results) => {
		console.log(results);
		res.json({
			code: 200,
			msg: '删除选中的记录'
		});
	});
};
