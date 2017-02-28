/**
 * Created by Messi on 2017/2/24.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//parser application/x-www-form-urlencodeed
app.use(bodyParser.urlencoded({extended:false}));
//parser application/json
app.use(bodyParser.json());
app.use("/",express.static(__dirname));  //定位到当前根目录的静态资源,将一个目录转化为静态目录
var port = 9090;
var router = express.Router();
router.get("/reactjs/sources/data.json",function (req,res) {
   var now = new Date();
   var nStr = [
       now.getHours(),
       now.getMinutes(),
       now.getSeconds(),
       now.getMilliseconds()
   ];
   nStr = nStr.join("-");
   global.jsonResult = global.jsonResult || [
       {
           id: 1,
           author: "Pete Hunt(" + nStr + ")",
           text: "This is one comment"
       },
       {
           id: 2,
           author: "Jordan Walke(" + nStr + ")",
           text: "This is *another* comment"
       }

   ];
    if (req.query.clear == 1) {
        global.jsonResult = [
            {
                id: 1,
                author: "Pete Hunt(" + nStr + ")",
                text: "This is one comment"
            },
            {
                id: 2,
                author: "Jordan Walke(" + nStr + ")",
                text: "This is *another* comment"
            }
        ];
    }
    res.json(global.jsonResult);
});
router.post("/reactjs/sources/data.json",function (req,res) {
   if(req.body){
       global.jsonResult.push({
           id:global.jsonResult.length+1,
           author:req.body.author,
           text:req.body.text
       });


       res.json(global.jsonResult);
   }

});
app.use("/",router);
app.listen(port);
console.log("server is listen!"+port);