/**
 * Created by Messi on 2016/12/28.
 */
var express = require('express');
var app = express();
app.use('/',express.static(__dirname));
var router = express.Router();
router.post("/XMLHttpRequest",function (req,res) {
  var ajaxData = {
      goods:[
        {
          name:"iphone50",
          price:998,
          homeLink:"http:www.taobao.com",
          orderDate: new Date(),
          total:100
        },
        {
          name: "机器人儿",
          price:20000,
          homeLink:"http:www.taobao.com",
          orderDate: new Date(),
          total: 3
        },
        {
          name: "扫地僧",
          price:20000,
          homeLink:"http:www.taobao.com",
          orderDate: new Date(),
          total: 3
        },
        {
          name: "大疆直升机",
          price:20000,
          homeLink:"http:www.taobao.com",
          orderDate: new Date(),
          total: 3
        },
        {
          name: "外星人笔记本",
          price:20000,
          homeLink:"http:www.taobao.com",
          orderDate: new Date(),
          total: 3
        }
      ],
    totalPrice:null,
    date: new Date()
  };
   res.json(ajaxData);
});
app.use('/',router);
var port = 8086;
app.listen(port);
console.log("server is running" + port);