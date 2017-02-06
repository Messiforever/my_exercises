/**
 * Created by Messi on 2017/2/6.
 */
(function (ag) {
    var m  = ag.module("Menu",[]);
    m.directive("menuSelect",[function () {
        return{
            restrict:"ECMA",
            templateUrl:"exercise.html",
            replace:true,
            scope:{
                menus:"=",
                selected:"=",
                sources:"="
            },
            compile:function () {
                return{
                    pre:function () {},
                    post:function (scope,jqLite,attrs) {
                        var p = arguments;
                    }
                }
            }
            // ,link:function () {}

        }


    }]);
})(angular);