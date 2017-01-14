/**
 * Created by Messi on 2017/1/13.
 */
var content = {
    dataTotal:3000,
    pageIndex:1,
    pageSize:15,
    data:[
        {name:"梅旭",
            gender:"男",
            age:20,
            address:""
        }, {name:"万茂",
            gender:"男",
            age:20,
            address:""
        },
        {name:"李涛",
            gender:"男",
            age:20,
            address:""
        },
        {name:"张阳阳",
            gender:"女",
            age:20,
            address:""
        }
    ]
};
var sLength = content.data.length;
for(var i = 0;i<500;i++){
    for(var j = 0;j<sLength;j++){
        var stu = {};
        var s = content.data[j];
        for(var k in s){
            if(s.hasOwnProperty(k)){
                stu[k] = s[k];
            }
        }
        content.data.push(stu);
    }
}
function renderData(pageIndex) {
    var start = (pageIndex-1)*15;
   var t = start+15;
   var container = $(".container");
   container.html("");
   // container.html(
   //     "<div class='head'>"+
   //      "<div class='column'>name:<div class='border'></div></div>"+
   //  "<div class='column'>gender:<div class='border'></div></div>"+
   //  "<div class='column'>age:<div class='border'></div></div>"+
   //  "<div class='column'>address:<div class='border'></div></div>"+
   //  "<div class='column'>operation:<div class='border'></div></div>"+
   //  "</div>");

   for(var i = start;i<t;i++){
       var row = $("<div class='row'></div>");
       var student = content.data[i];
       //姓名
       var column = $("<div class='column'></div>");
       column.text(student.name);
       row.append(column);
       // column.appendTo(row); 添加元素的第二种写法
       //性别
       var columnGender = column.clone();
       columnGender.text(student.gender);
       row.append(columnGender);
       //年龄
       var ageGender = column.clone();
       ageGender.text(student.age);
       row.append(ageGender);
       //地址
       var addressGender = column.clone();
       addressGender.text(student.address);
       row.append(addressGender);
       //操作
       var operationGender = column.clone();
       operationGender.html("<input type='button' value='编辑' class='edit' />");
       row.append(operationGender);
       container.append(row);
   }

}
renderData(1);
function operation() {
    var edit = $(".edit");
    edit.click(function () {
        var province = $("<select></select>");
        province.change(function () {

           //alert($(this).val());
        });

        var city = $("<select></select>");
        city.change(function () {
             var c = $(this).val();
             var pro = $(this).siblings("select");
             var p = pro.val();
             alert(p + "/" + c);
             $(this).parent().append("<div>" + p + "/" + c + "</div>");
             pro.remove();
             $(this).remove();
        });
        province.append("<option value='四川'>四川</option>");
        province.append("<option value='湖北'>湖北</option>");
        city.append("<option value='成都'>成都</option>");
        city.append("<option value='绵阳'>绵阳</option>");
        city.append("<option value='自贡'>自贡</option>");
        var row = $(this).parents('.row');
        var addr =row.find(".column").eq(3);
        addr.html("");
        addr.append(province);
        addr.append(city);
    });

}
operation();
function pager() {
var pNumber = $(".page-number");

    var p = Math.ceil(content.dataTotal/content.pageSize);
    for(var i = 0; i < p; i++){
        if(i<5){
            pNumber.append("<div>"+(i+1)+"</div>");
        }
        if(i==9){
            pNumber.append("<div class='ellipsis2'>"+"<label>"+"..."+"</label>"+"</div>");
            pNumber.find("div").eq(0).addClass("current");
        }
    }
}
pager();
var stepChange = 5;
var currentPage =1;
var currentage1 = 1;
function pagerNumberEvent() {
    var pNumber = $(".page-number");
    pNumber.find("div").click(function () {
        currentPage = $(this).text();
        try{
            currentPage = Number(currentPage);
        }catch(e) {
            // currentPage = NaN;
        }
         if(isNaN(currentPage)){
            currentPage=currentage1;
         }else {
             renderData(currentPage);
         }
        $(".current").removeClass("current");
        $(this).addClass("current");
    });

    $(".ellipsis2").click(function () {
        currentPage +=stepChange;
        currentage1 = currentPage;
        var min = currentPage-stepChange;
        var max = currentPage+(stepChange-1);
        var pNumber = $(".page-number");
        pNumber.html("");
        pNumber.append("<div class='ellipsis'>...</div>");
        for(var i = min;i < max;i++){
            pNumber.append("<div>"+(i+1)+"</div>");
        }
        pNumber.append("<div class='ellipsis2'>"+"..."+"</div>");
        pNumber.find("div").eq(5).addClass("current");
        renderData(currentPage);
        pagerNumberEvent();
    });
    $(".ellipsis").click(function () {
        currentPage -=stepChange;
        currentage1 = currentPage;
        var min = currentPage-stepChange;
        var max = currentPage+(stepChange-1);
        var pNumber = $(".page-number");
        pNumber.html("");
        if(min>0){
            pNumber.append("<div class='ellipsis'>"+"..."+"</div>");
            for(var i = min;i < max;i++) {

                pNumber.append("<div>" + (i + 1) + "</div>");


            }
            pNumber.append("<div class='ellipsis2'>"+"..."+"</div>");
            pNumber.find("div").eq(5).addClass("current");
            renderData(currentPage);
            pagerNumberEvent();

        }else {
            for(var i=0;i<5;i++) {

                pNumber.append("<div>" + (i + 1) + "</div>");

            }
                pNumber.append("<div class='ellipsis2'>" + "<label>" + "..." + "</label>" + "</div>");
                pNumber.find("div").eq(0).addClass("current");
         pagerNumberEvent();
        }


    });
    // $(".pre-page").click(function () {
    //     currentPage -=1;
    //     var min = currentPage-stepChange;
    //     var max = currentPage+(stepChange-1);
    //     var pNumber = $(".page-number");
    //     pNumber.html("");
    //     pNumber.append("<div class='ellipsis'>...</div>");
    //     for(var i = min;i < max;i++){
    //         pNumber.append("<div>"+(i+1)+"</div>");
    //     }
    //     pNumber.append("<div class='ellipsis2'>"+"..."+"</div>");
    //     pNumber.find("div").eq(4).addClass("current");
    //     pagerNumberEvent();
    // });
    // $(".next-page").click(function () {
    //     currentPage1 =currentPage1+1;
    //
    //     var pNumber = $(".page-number");
    //     if(currentPage1<6){
    //         $(".current").removeClass("current");
    //     pNumber.find("div").eq(currentPage1).addClass("current");
    //     }
    //     pagerNumberEvent();
    // });
}
pagerNumberEvent();


var rows = $(".container .row");
var dragging = {};
function dragHandle(){
    $(".drag-handle").mousedown(function(e){
        e.preventDefault();
        rows = $(".container .row");
        dragging.handle = $(this);
        dragging.handleIndex =
            $(".drag-handle").index($(this));
        dragging.group = [];
        rows.each(function(){
            var cols = $(this).find(".column");
            var l = cols.eq(dragging.handleIndex);
            var r = cols.eq(dragging.handleIndex + 1);
            dragging.group.push({
                l:l,
                r:r
            });
        });
    });
    $(document).mousemove(function(e){
        if(dragging.prePoi){
            var subX = e.pageX - dragging.prePoi.x;
            if(dragging.handle){
                var p = dragging.handle.parent();
                var w = p.width();
                var p0 = p.prev();
                var w0 = p0.width();
                p0.width(w0 + subX);
                p.width(w - subX);
                dragging.group.forEach(function(o){
                    o.l.width(o.l.width() + subX);
                    o.r.width(o.r.width() - subX);
                });
            }

        }
        dragging.prePoi = {x:e.pageX,y:e.pageY};
    }).mouseup(function(){
        dragging.handle = null;
    });
}
dragHandle();
