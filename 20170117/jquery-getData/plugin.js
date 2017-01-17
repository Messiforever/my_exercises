/**
 * Created by Messi on 2017/1/17.
 */
(function (window, $) {
    $.fn.extend({
        student: function (option) {
            var wrapper = $(this);
            var getData = function (param) {
                $.ajax({
                    url: param.url,
                    type: param.method ? param.method : "post",  //post，put
                    data: param.data ? param.data : null,
                    success: function (content) {
                        param.callback(content);
                    },
                    error: function (error) {
                        param.error(error);
                    }
                });

            };
            //拿到数据，如何显示
            var render = function (data) {
                var header, content;
                //   var isArray = Object.property.toString().call(data);  tosring方法会输出一个“[object array]”
                //  if(isArray ===“[object array]”){}
                //  if(data instanceof  Array){}
                if (Array.isArray(data)) {
                    //region 渲染头部
                    header = $("<div class='head'></div>");
                    header.append("<div>Name:</div>");
                    header.append("<div>ENname:</div>");
                    header.append("<div>Age:</div>");
                    header.append("<div>Favorite:</div>");
                    header.append("<div>Student ID:</div>");
                    header.append("<div>Sex:</div>");
                    header.append("<div>Height:</div>");
                    header.append("<div>Weight:</div>");
                    //endregion

                    content = $("<div class='content'></div>");
                    data.forEach(function (stu) {

                        var row = $("<div class='row'></div>");
                        content.append(row);
                        row.append("<div>" + stu.name + "</div>");
                        row.append("<div>" + stu.enName + "</div>");
                        row.append("<div>" + stu.age + "</div>");
                        row.append("<div>" + stu.favorite + "</div>");
                        row.append("<div>" + stu.Nd + "</div>");
                        row.append("<div>" + stu.gender + "</div>");
                        row.append("<div>" + stu.height + "</div>");
                        row.append("<div>" + stu.weight + "</div>");
                    });
                    //$("").each(function(){
                    // $(this);
                    // });
                    wrapper.append(header);
                    wrapper.append(content);
                }


            };
            getData({
                url: "/students",
                callback: function (data) {
                    if (option.dataRenderStart)
                        option.dataRenderStart();
                    render(data);
                    if (option.dataRendered)
                        option.dataRendered();
                },
                error: function (msg) {
                    if (option.getError)
                        option.getError();
                    alert(msg);
                }
            });
        }
    });
})(window, jQuery);