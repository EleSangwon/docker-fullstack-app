const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit:10,
    hoat:'mysql',
    user:'root',
    password:'sangwon',
    database:'myapp'
});

exports.pool = pool;
