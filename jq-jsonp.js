/**
 * Created by Messi on 2017/2/23.
 */
var express = require('express');
var app = express();
app.use("/",express.static(__dirname));  //定位到当前根目录的静态资源,将一个目录转化为静态目录
var port = 8030;
app.listen(port);
console.log("server is listen!"+port);
var router = express.Router();
app.use("/",router);
router.get("/getData",function (req,res) {
    var result = {
        content:"",
        flag:1,
        msg:"hello"

        };
    // res.write(jsonpCallback+"('I' m a jsonp')");
    res.write("globalCallback("+JSON.stringify(result)+")");
    res.end();
});
