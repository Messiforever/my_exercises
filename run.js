/**
 * Created by Messi on 2017/1/17.
 */

var express = require("express");
var app = express();
app.use("/", express.static(__dirname));
var router = express.Router();
router.post("/students", function (req, res) {

   res.json([
       {
          name:"万茂",
           enName:"Wan",
           age:"21",
           favorite:["FIFA","全境封锁"],
           Nd:"1400909527",
           gender:"男",
           height:"165",
           weight:"86"
       },
       {
           name:"梅旭",
           enName:"Messi",
           age:"21",
           favorite:["FIFA","全境封锁"],
           Nd:"1400909528",
           gender:"男",
           height:"165",
           weight:"86"
       }, {
           name:"陈益民",
           enName:"Wan",
           age:"21",
           favorite:["全境封锁","擦皮鞋"],
           Nd:"1400909527",
           gender:"男",
           height:"165",
           weight:"86"
       }, {
           name:"赵晨",
           enName:"magic",
           age:"21",
           favorite:["FIFA","地下城"],
           Nd:"1400909527",
           gender:"男",
           height:"165",
           weight:"86"
       }, {
           name:"何睿阳",
           enName:"young",
           age:"21",
           favorite:["FIFA","全境封锁"],
           Nd:"1400909527",
           gender:"男",
           height:"165",
           weight:"86"
       }
       ]);
    });
app.use("/", router);
var port = 2017;
app.listen(port);
console.log("Server running at" + port);