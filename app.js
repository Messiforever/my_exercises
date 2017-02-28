/**
 * Created by Messi on 2017/2/21.
 */
var express = require("express");
    var app = express();
app.use("/", express.static(__dirname));
var router = express.Router();
router.post("/home", function (req, res) {
    var items = [
        {
            title:"峨眉山"
        },
        {
            title:"青城山"
        },
        {

            title:"贡嘎山"

        }
    ];
    res.json(

            items

    );
});
app.use("/", router);
var port = 8010;
app.listen(port);
console.log("Server running at" + port);