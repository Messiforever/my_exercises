/**
 * Created by Messi on 2016/12/27.
 */
function solve(param) {
  var result = {};
  var array = param.split("&");
  array.forEach(function (str) {
    var array2 = str.split("=");
    result[array2[0]] = array2[1];
  });
  return result;
}
exports.solve = solve; //node.js的一个暴露机制，暴露出去，函数才能被别的js共用