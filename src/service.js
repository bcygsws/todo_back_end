const db = require('./db');
// 1.获取todos列表数据
exports.allTodos = (req, res) => {
	const sql = 'select * from todo order by id ASC';
	db.base(sql, null, (results) => {
		console.log(results);
		res.json(results);
	});
};
