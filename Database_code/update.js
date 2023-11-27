var mysql = require('mysql');
var con = mysql.createConnection( {
    host:"localhost",
    user:"root",
    password: "",
    port: 3306,
    database:"mydb"
});

con.connect(function (err) {
    if (err) throw errl
    var sql = "update customers set address = 'Mumbai' where address = 'New York'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRow + " record(s) update");
    });
});