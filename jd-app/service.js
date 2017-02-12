/**
 * Created by Messi on 2017/2/8.
 */
var express = require("express");
var app = express();
app.use("/",express.static(__dirname));
var port = 8006;
app.listen(port);
console.log("running at"+port);