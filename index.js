var express = require("express");
var app = express();
app.use(express.static('bower_components'));
app.use(express.static('public/assets'));



app.get("*", function(request, response){
	response.sendfile('./public/index.html'); 
});



app.listen(8000);
console.log("App listening on port 8000");

