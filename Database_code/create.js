var mysql = require('mysql');
var con = mysql.createConnection( {
    host:"localhost",
    user:"root",
    password: "",
    port: 3306,
    database:"mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    var sql = "create table customers(name varchar(255),address varchar(255))";
    con.query(sql, function (err,result) {
        if (err) throw err;
        console.log("Table created :)")
    })
})