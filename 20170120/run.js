/**
 * Created by Messi on 2017/1/20.
 */
var express = require("express");
var app = express();
app.use("/",express.static(__dirname));
var router = express.Router();
router.post("/userUpdate",function (req,res) {
   req.on("date",function (data) {
       var result =data;
       res.write(data);
       res.end();
   });
});
app.use("/",router);
var port = 3030;
app.listen(port);
console.log("Server is listening at"+ port);