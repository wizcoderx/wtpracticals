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
    var sql = "delete from customers where address = 'Mumbai'";
    con.query(sql,function(err,result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});