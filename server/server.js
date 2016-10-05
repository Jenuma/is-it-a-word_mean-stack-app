var express = require("express");
var path = require("path");

var app = express();

app.use("/angular", express.static(path.join(__dirname, "../node_modules/angular")));
app.use("/controllers", express.static(path.join(__dirname, "../client/controllers")));
app.use("/directives", express.static(path.join(__dirname, "../client/directives")));
app.use("/jquery", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use("/bootstrap", express.static(path.join(__dirname, "../node_modules/bootstrap/dist")));
app.use("/css", express.static(path.join(__dirname, "../client/css")));
app.use("/json", express.static(path.join(__dirname, "../json")));
app.use(express.static(path.join(__dirname, "../client/views")));

app.listen(3000);
console.log("Server running on port 3000...");