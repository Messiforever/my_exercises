/**
 * Created by Messi on 2017/2/6.
 */
(function (ag) {
    var m = ag.module("HelloModule",[]);
    m.directive("helloWorld",[function () {
        return {
            restrict:"ECMA",
            // template:"<div>hello world...</div>"
            templateUrl:"hello.html",
            replace:true,
            scope:{
                link:"@asLink",
                linkText:"@asLinkText",
                inputMsg:"="
            }

        };
    }]);
})(angular);