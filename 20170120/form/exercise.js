/**
 * Created by Messi on 2017/1/20.
 */
(function (ag,window) {
    var valid = ag.module("formValid",[]);
    valid.controller("formValidController",["$scope",function ($scope) {
        $scope.userName = "";
        $scope.password = "";
        $scope.confirmPsd = "";
        $scope.email = "";
        $scope.referee = "";
        $scope.activityCode = "";
        $scope.identifyingCode = "";
    }]);
})(angular,window);