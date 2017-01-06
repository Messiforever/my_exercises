/**
 * Created by Messi on 2016/12/29.
 */
//原生js操作ajax

function ajaxFn(url,method,option,callback) {
  var ajax = null;
  if(window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }else     if(window.ActiveXObject) {
    ajax = new  ActiveXObject("Microsoft.XMLHTTP");
  }
  if(ajax) {
    ajax.onreadystatechange = function () {
      switch (ajax.readyState){   //返回XMLHTTP请求的当前状态,有四个状态
        case 4:
          var result = {};
          if(ajax.status==200) {  //协议状态码
            result.content = ajax.responseText;
          }else {

          }
          result.status = ajax.status;
          callback(result);
          break;
        case 3:
          break;
        case 2:
          break;
        case 1:
          break;
      }
    };
    ajax.open(method ? method:"get", url, true);//建立连接 四次握手
    ajax.send(option);
  }
}
var dataAccept = document.getElementById("dataAccept");
var handle = function () {
  ajaxFn("/XMLHttpRequest","post",null,function (flag) {

    if(flag.status == 200){
      var data = JSON.parse(flag.content);
      var container = document.getElementById("dataContainer");
      function header() {

        var head =
         "<div>"
        +"<div>商品名</div>"
        +"<div>价格</div>"
        +"<div>商品链接</div>"
        +"<div>日期</div>"
        +"<div>数量</div>"
        +"</div>";
        container.innerHTML = head;
      }
      header();

      function content() {
          var contentHtml = "";
         for(var i = 0;i<data.goods.length;i++){
           var goods = data.goods[i];
           var h =
             "<div>" +
             "<div>" + goods.name +"</div>"
             +"<div>"+ goods.price +"</div>"
             +"<a href='goods.homeLink'>"+ goods.homeLink +"</a>"
             +"<div>"+ goods.orderDate +"</div>"
             +"<div>"+ goods.total +"</div>"
             +   "</div>" ;
           contentHtml += h;
         }

        container.innerHTML += contentHtml;
      }
      content();
    }

  });
};
if(dataAccept.addEventListener) {
  dataAccept.addEventListener("click",handle);
}else {
  dataAccept.onclick = handle;
}
