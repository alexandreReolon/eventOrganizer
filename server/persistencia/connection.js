var mysql = require('mysql');

const conexao = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	port: '3306',
	password: 'root',
	database: 'event-planning',
});

module.exports = conexao;