/**
 * Created by Messi on 2017/2/2.
 */
var express = require("express");
var app = express();
app.use("/",express.static(__dirname));
var router = express.Router();
router.post("/home",function (req,res) {
    
    var data = "春节快乐";
      res.json(data);
});
app.use("/",router);
var port = 2018;
app.listen(port);
console.log("Server running at"+port);