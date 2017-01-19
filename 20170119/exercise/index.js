/**
 * Created by Messi on 2017/1/19.
 */
(function (ag,window) {
    var main = ag.module("mainModel",[]);
    main.factory("Datafactory",[function () {
      return{
          flag:1,
          msg:"请求成功",
          code:200,
          content:[
              {name:"梅旭",
                  gender:"男",
                  age:20,
                  address:"",
                  id:1
              }, {name:"万茂",
                  gender:"男",
                  age:20,
                  address:"",
                  id:1
              },
              {name:"李涛",
                  gender:"男",
                  age:20,
                  address:"",
                  id:1
              },
              {   name:"张阳阳",
                  gender:"女",
                  age:20,
                  address:"",
                  id:1
              }
          ],
          getStudent:function () {
              var result = [];
              this.content.forEach(function (data) {
                  if(data.id==1){
                      result.push(data);
                  }

              })
          }
      };

    }]);
    main.controller("mainController",["$scope","Datafactory",
    function ($scope,service) {
        $scope.title =["name:","gender:","age:","address:","operation:"];
        $scope.students.forEach(function (d) {
            d.student=service.getStudent();
        })
    }]);
})(angular,window);