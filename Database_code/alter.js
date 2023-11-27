var mysql = require('mysql');
var con = mysql.createConnection( {
    host:"localhost",
    user:"root",
    password: "",
    port: 3306,
    database:"mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "alter table customers add column id int auto_increment primary key";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table altered");
    });
});