/**
 * Created by Messi on 2017/1/13.
 */

//引用传递和值传递
// var loadHandle;
// (function (window) {
//     window.$ = function () {};
//     window.JQuery = window.$;
//     window.JQuery.fn = function () {};
//     window.JQuery = function (param) {
//         if(typeof param =="param"){
//             var elements = document.querySelectorAll(param);
//         }else if(typeof param =="function"){
//             loadHandle = param;
//         }else  if(typeof param =="object"){
//             if (param ===document){
//                 document.onload = loadHandle;
//             }else if(typeof param ==window.$.fn){
//                 return param;
//             }
//         }
//
//          return window.$.fn;
//     };
//     alert(window.$);
// })(window);
// ECMAScript中所有函数的参数都是按值来传递的。
//但是为什么涉及到原始类型与引用类型的值时仍然有区别呢，还不就是因为内存分配时的差别。 （我对比了一下，这里和复制变量时遵循的机制完全一样的嘛，你可以简单地理解为传递参数的时候，就是把实参复制给形参的过程）
//原始值：只是把变量里的值传递给参数，之后参数和这个变量互不影响。
//引用值：对象变量它里面的值是这个对象在堆内存中的内存地址，这一点你要时刻铭记在心！因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象呀。
