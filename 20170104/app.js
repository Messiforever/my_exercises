/**
 * Created by Messi on 2017/1/4.
 */
var express = require("express");
var app = express();
app.use("/", express.static(__dirname));
var router = express.Router();
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Content-Type", "application/json;charset=tuf-8");
  next();
});
router.get("/chat", function (req, res) {
  exports.chat = exports.chat || {};
  function Message(key,m,uname,time,to) {
    var self = this;
    self.key = key;
    self["user-name"] = uname;
    self["message-time"] = time;
    self.message = m;
    self.to = to;
    self.isToAll = false;
    self.type = 1;//0透传消息，非0为显示消息

  }
  var logined;
  if (req.query.username) {
    logined = req.query.username;
    exports.chat[logined] = exports.chat[logined] || {};
    exports.chat[logined].res = res;
    exports.chat[logined].req = req;
    exports.chat[logined].req.on("close",function () {
      for(var u in exports.chat){
            if(exports.chat.hasOwnProperty(u)) { //hasOwnProperty不查找原型，只查找自己的属性
              var m = new Message("user-offline","",logined,new Date(),"");
              m.isToAll = true;
              m.type = 0;

              exports.chat[u].res.write("data:" + JSON.stringify(m) + "\n\n");
                }

      }
      delete exports.chat[logined];
    });

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Contral": "no-cache",
      "Connection": "keep-alive"
    });
    for (var u in exports.chat) {
      if (exports.chat.hasOwnProperty(u)) {
        var m = new Message(
          "user-online",
          "",
          logined,
          new Date(),
          ""

        );
        m.isToAll = true;
        m.type = 0;

        exports.chat[u].res.write("data:" + JSON.stringify(m) + "\n\n");
      }

    }
  }
  //获取所有在线用户
  if (req.query.GetALLUser) {
    var users = [];

    for (var u1 in exports.chat) {
      if (exports.chat.hasOwnProperty(u1)) {
        users.push(u1);

      }
    }
    res.json(users);
  }
  if (req.query.Chatting){

    var a = req.query.to;
    var b = req.query.sendMsg;
    exports.chat[a].res.write("data:"+JSON.stringify({content:b})+"\n\n");

    res.json({});
  }
    });
app.use("/", router);
var port = 8090;
app.listen(port);
console.log("Server running at" + port);