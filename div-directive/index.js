/**
 * Created by Messi on 2017/2/21.
 */
(function (angular) {
    var home = angular.module("Home",[]);
    home.factory("dataGet",["$http",function ($http) {
        return {
            getData:function () {
                return $http.post("/home").then(function (res) {
                    var result = [];
                    res.data.forEach(function (i) {
                        result.push({
                            title:i.title
                        });
                    });
                    return result
                });
            }
        }
    }]);
    home.directive("dropDownList",[function () {
        return{
            restrict:"EC",
            template:
            "<div class='container'>"+
            "<input type='text'"+" ng-focus='inputFocused()'"+" ng-blur='inputBlur()'>"+
            "<ul class='list' ng-show='isShowList'>"+
            "<li ng-repeat='item in items'>" +
            ""+"{{item.title}}"+"" +
            "</li>"+
            "</ul>"+
            "</div>",
            scope:{
                items:"=",
                inputFocused:"&",
                isShowList:"=",
                inputBlur:"&"
            },
            replace:false
        }
    }
    ]);
    home.controller("HomeControllor",["$scope","dataGet",function ($scope,dataGet) {
         $scope.inputFocused = function () {
             $scope.isShowList = true;
         };
         $scope.inputBlur = function () {
             $scope.isShowList = false;
        };
         $scope.isShowList = false;
         dataGet.getData().then(function (r) {
             $scope.items = r;
         })
    }]);
})(window.angular);