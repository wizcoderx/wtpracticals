var mysql = require('mysql');
var con = mysql.createConnection( {
    host: "localhost",
    user: "root",
    port:3306,
    password: ''
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("create database mynmitd", function (err, result)
    {
        if (err) throw err;
        console.log("Database created :)");
    });
});