/**
 * Created by Messi on 2016/12/26.
 */

// var http = require('http');
// var url = require('url');
var express = require('express');
var app = express();
app.use("/",express.static(__dirname));  //定位到当前根目录的静态资源,将一个目录转化为静态目录
var port = 8888;
app.listen(port);
console.log("server is listen!");
var router = express.Router();
router.post("/menu/list",function (req,res) {

 req.on('data',function (data) {
   var dataR = decodeURIComponent(data);
   res.json({r:dataR});
 });
  var dataSource = {
    data:[{
      id:0,
      title:"用户信息",

    },{
      id:1,
      title:"打卡记录",
    }],
    flag:1,
    msg:"成功"
  };
  // res.json(dataSource);
});

app.use("/",router);

// console.log('hello world');
//
//
// var server = http.createServer(function (req,res) {
//   var pathname = url.parse(req.url).pathname;
//   // console.log(pathname);
//       if(pathname.indexOf('about') > -1) {
//         // throw new Error("server is error!");
//         // res.writeHead(200,{"Content-Type":"text/plain"});
//         res.writeHead(503,{"Content-Type":"text/plain"});
//         res.write("Hello About");
//         res.end();
//         return;
//           }
//   res.writeHead(200,{"Content-Type":"text/plain"});
//   res.write("Hello World");
//   res.end();
// });
// var port = 8888;
// server.listen(port);
// console.log("server running on" +port);
