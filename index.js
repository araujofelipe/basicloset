var express = require("express");
var app = express();

app.get("/", function(request, reponse){
	console.log("");
});


app.listen(8000);
console.log("App listening on port 8000");

