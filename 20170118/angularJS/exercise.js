/**
 * Created by Messi on 2017/1/18.
 */
(function (ag,window) {
    var main = ag.module("mainModel",[]);
    main.controller("mainController",["$scope",
        function ($scope) {
            $scope.$watch("parent",function (news,olds) {
                  if(news=="yes"){
                      $scope.$broadcast("broad-test","yes");
                  }
            });
            $scope.$on("emit-test",function (event,m) {
                alert(m);
            });
            }]);
    main.controller("childController",["$scope",function ($scope) {
        $scope.$on("broad-test",function (event,param) {
            alert(param);
        });
        $scope.$watch("child",function (news,olds) {
            if(news=="123"){
                $scope.$emit("emit-test","123");
            }
        });

    }]);

})(angular,window);