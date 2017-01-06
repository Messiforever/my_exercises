/**
 * Created by Messi on 2017/1/4.
 */
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',express.static(__dirname));
var port=9080;
app.listen(port);
console.log("Server running at" +port);