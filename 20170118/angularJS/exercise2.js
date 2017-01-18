/**
 * Created by Messi on 2017/1/18.
 */
(function (ag,window) {
    var main = ag.module("mainModel",[]);
    main.controller("mainController",["$scope",
        function ($scope) {
        $scope.Color1 = [
            {color:"#BE4800"},{color:"#01A9BE"},{color:"#56BF01"},{color:"#BF0143"},
            {color:"#01BE19"},{color:"#BBB403"},{color:"#BF003A"},{color:"#189CA8"}];

    }]);
})(angular,window);