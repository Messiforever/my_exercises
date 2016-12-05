/**
 * Created by M on 2016/12/5.
 */
var varString ="abc"; //string  字符
var varNumber =123;   //number
var varUndefined =undefined;  //undefined
var Boolean =true;      //boolean
var varNull =null;     //null
var varType=typeof "abc";
document.write(varType);
document.write("<br>");
document.write(typeof varNumber);
document.write("<br>");
document.write(typeof Boolean);
document.write("<br>");
document.write(typeof varNull);
/*
*
javascript 变量类型检查
*
 */
var varNumber2 = 8;
varNumber2 = varNumber2+12;
document.write(varNumber2);
var www =1/0;
document.write(typeof www); //无穷大

document.write("<br>");
var hello = "Hello world!";
document.write("<br>");
var I=hello.length;
document.write(I);
document.write("<br>");
document.writeln(hello[hello.length-1]);//字符串长度练习
var helloPre=hello.substring(0,5);
document.write("<br>");
document.write(helloPre);

/**
 * boolean练习
 * @type {boolean}
 */
document.write("<br>");
var flag=true;
if ("1"===9/9){   //绝对等于 类型比较
    document.write("flag=true");
}else
{
    document.write("flag=false");
}
/**
 * undefined练习
 */
var undefined;
/**
 * 类型转换练习 String
 */
var strNumberConvert = String(123);
document.write("<br>");
document.write(typeof strNumberConvert);

var dateStr = String(new Date());
document.write("<br>");
document.write(dateStr);

/**
 * 类型转换 Number
 */
 var nVar = Number("1234");
document.write("<br>");
document.write(typeof nVar);

var bNumber = Number(true);
document.write("<br>");
document.write(bNumber);

var nNumber = Number(null);
document.write("<br>");
document.write(nNumber);

var unNumber = Number(undefined);
document.write("<br>");
document.write(typeof unNumber);

/**
 * 一元运算符
 */
var y =5;
var x ="2";
x += y;

document.write("<br>");
document.write(x);

/**
 * object 对象类型
 */
var person={
    name:"Bob",
    age:20,
    tag:['js','web','mobile'],
    city:"Beijing",
    hasCar:true,
    zipcode:null
};
document.writeln(person.name);
document.writeln(person.age);
document.writeln(person.tag);
document.writeln(person.city);
document.writeln(person.hasCar);
document.writeln(person.zipcode);
