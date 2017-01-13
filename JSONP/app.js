/**
 * Created by Messi on 2017/1/10.
 */
var express = require('express');
var app = express();
app.use("/",express.static(__dirname));  //定位到当前根目录的静态资源,将一个目录转化为静态目录
var port = 9999;
app.listen(port);
console.log("server is listen!"+port);
var router = express.Router();
app.use("/",router);
router.get("/",function (req,res) {
    var jsonpCallback = req.query.jsonp;
      
    // res.write(jsonpCallback+"('I' m a jsonp')");
    res.write(jsonpCallback+"("+JSON.stringify({msg:"I' m a jsonp"})+")");
    res.end();
});


