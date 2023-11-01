const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: '', 
     user:'', 
     password: '',
    connectionLimit: 5,
    port: 3306,
    database: ''
});
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("select * from Master_email");
	console.log(rows); //[ {val: 1}, meta: ... ]
  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}
asyncFunction();