/**
 * Created by Messi on 2017/1/3.
 */
var express = require('express');
var path = require("path");
var fs = require("fs-extra");
var busboy = require('connect-busboy');
var app = express();
app.use(busboy());
app.use("/",express.static(__dirname));  //定位到当前根目录的静态资源,将一个目录转化为静态目录
//设置跨域访问
app.all('*',function (req,res,next) {
  res.header("Access-Control-Allow-Origin","http://localhost:8990");
  res.header("Content-Type","application/json;charset=tuf-8");
  next();
});
app.route('/upload')
.post(function (req,res,next) {
  req.pipe(req.busboy);
  req.busboy.on('file',function (fieldname,file,filename) {
   fstream = fs.createWriteStream(__dirname+'/uploadFile/'+filename);
   file.pipe(fstream);
   fstream.on('close',function () {
     console.log("Upload Finished of"+ filename);
     // res.redirect('back');
     res.json({status:0,message:"文件上传成功！"});
   });
  });
});

app.listen(port,function () {
  console.log("server is listen!"+port);
});
var router = express.Router();
router.post("/", function (req, res) {
  res.json({
    name:"This is Access-Control-Allow-Origin"
  });
});
app.use('/', router);
var port = 8989;
app.listen(port);