/**
 * Created by Messi on 2016/12/23.
 */
// (function () {
//   document.addEventListener("load",function () {
//                                                             //js写head里面
//   });
// })();
// window、navigator
  //常见的dom对象，div，body，image，a，input，button。
//var util = "util";
//window.util = "util";全局作用域中定义变量，就是全局变量，相当于给window加属性

(function (window) {
  window.util = window.util || {};
  util.tree = {};
  util.tree.node = {
    id:"",
    title:"",
    isOpen:0,
    icon:"",
    pId:-1,
    type:1

  };
  util.tree.GenerateNode = function () {

  };

  util.tree.GenerateNode = function (id,title) {
    this.id = id;
    this.title = title;

  };

  util.tree.GenerateNode.prototype = util.tree.node;

  var node = new util.tree.GenerateNode(0);
  node.title = "董事长";
  var node2 = new util.tree.GenerateNode(1);
  node2.title = "CFO";
  node2.pId = 0;
  // console.log(node2.type);
  var node3 = new util.tree.GenerateNode(2);
  node3.title = "CTO";
  node3.pId = 0;
  var node4 = new util.tree.GenerateNode(3);
  node4.title = "CEO";
  node4.pId = 0;
    function nodeClicked(e) {
      e.stopPropagation();
      var ele = e.currentTarget;
      var isOpen = ele.getAttribute("is-open");
      if(!isOpen || isOpen == 0){
        ele.style.height ="100px";
        ele.setAttribute("is-open","1");
      }
      else {
        ele.style.height ="25px";
        ele.setAttribute("is-open","0");
      }
    }
  var nodes = [node,node2,node3,node4];
  util.tree.create = function (selector) {
    var container = document.querySelector(selector);

     function faceGenerate(contain,pid) {
       var roots = [];
       for(var i =0;i<nodes.length;i++){
         if(nodes[i].pId==pid) {
           roots.push(nodes[i]);
           var ele = document.createElement("div");
           ele.innerText = nodes[i].title;
           ele.setAttribute("class","node");
           ele.addEventListener("click",nodeClicked);
           contain.appendChild(ele);
           faceGenerate(ele,nodes[i].id)
         }
       }
     }
     faceGenerate(container,-1);
  }

//New 的四件事
 // var obj = {}; //1.新生成一个对象，
 // obj._proto_ = util.tree.GenerateNode.prototype;//访问函数的原型，把函数原型赋值给新对象
 // util.tree.GenerateNode.call(obj); //3.给this赋值，用call函数把函数的this替换掉，用新生成的对象替换函数的this
 // var g = obj;  //4.把参数传给要传的对象，把新生成的对象赋值到new关键字左边都的对象

})(window);