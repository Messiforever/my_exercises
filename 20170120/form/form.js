/**
 * Created by Messi on 2017/1/20.
 */
(function (ag,window) {
     var valid = ag.module("formValid",[]);
     valid.controller("formValidController",["$scope",function ($scope) {
         $scope.userName = "";
         $scope.nickName = "";
         $scope.password = "";
         $scope.confirmPsd = "";
         $scope.mobile = "";
         $scope.email = "";


     }]);

})(angular,window);