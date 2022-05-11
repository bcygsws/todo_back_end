/**
 *
 * db.js
 * 和数据库交互文件
 *
 *
 */
const mysql = require('mysql');
exports.base = (sql, data, callback) => {
	// 注意：createConnection参数对象中的键值，要全部是是字符串
	const pool = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456',
		database: 'todo_db'
	});
	// 连接数据库
	pool.connect((err) => {
		if (err) {
			// 数据库连接出错时，打印错误
			console.log(err);
		}
	});
	pool.query(sql, data, (err, results) => {
		if (err) return;
		callback(results);
	});
	pool.end();
};
