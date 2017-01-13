/**
 * Created by Messi on 2017/1/3.
 */
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',express.static(__dirname));
var port=8990;
app.listen(port);