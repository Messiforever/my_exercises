/**
 * Created by Messi on 2017/1/18.
 */
(function (ag,window) {
    var main = ag.module("mainModel",[]);
    main.controller("mainController",["$scope","$interval","$rootScope",
        function ($scope,$interval,$rootScope) {
            //


            $scope.$watch("output",function () {
                $scope.$broadcast("broad-test","broad-message");
            });
            $scope.$on("emit-test",function (event,m) {
                alert(m);
            });


            $rootScope.basisMsg = "I'm root";
            $scope.output={};
            $scope.now = "";
            $interval(function () {
                var nn = new Date();
                $scope.now = nn.getMinutes()+","+nn.getSeconds();
            },1000);
            $scope.students =["陈皮","张阳阳","曾俊杰"];
            $scope.teacher=[{
                name:"代老师",
                gender:"男",
                occupation:"CEO",
                special:"帅"
            },{
                name:"周老师",
                gender:"男",
                occupation:"team-leader",
                special:"cute"
            },{
                name:"向老师",
                gender:"女",
                occupation:"manager",
                special:"beautiful"
            }
            ];    }]);
    main.controller("childController",["$scope","$rootScope",function ($scope,$rootScope) {
        var p = $scope.$parent;
        // p.teacher.length;
        // alert(p.teacher.length);
        // alert($rootScope.basisMsg);
        $scope.$on("broad-test",function (event,param) {
            alert(param);
        });
        $scope.$emit("emit-test","emit-message!");
    }]);

})(angular,window);