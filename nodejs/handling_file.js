var fs = require('fs');
fs.readFile("wizcoderx.txt", function(err, data) {
if (err) {
return console.error(err);
}
console.log("Asynchronous read: " + data.toString());
})

//synchronous reading

var fs = require('fs');
var data = fs.readFileSync('wizcoderx.txt');
console.log('Synchronous Read: ' + data.toString());
console.log("Program Ended");

//writing file

var fs = require("fs");
fs.writeFile('wizcoderx2.txt',"I am Iron Man - Tony Stark", function(err)
{
if (err) {
return console.log(err);
}
else
{
console.log("Write operation complete");
}
});

//delete file

var fs = require("fs");
fs.unlink("wizcoderx2.txt", function(){
console.log("Deletion Complete.");
});

