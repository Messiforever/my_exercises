/**
 * Created by Messi on 2017/1/19.
 */
(function (ag,window) {
    var main = ag.module("mainModel",[]);
    main.factory("DataFactory",
        [function () {
            return{
                flag:1,
                msg:"请求成功",
                code:200,
                content:[{
                    uuid:"addf34-dfg2-bdfg3-dfef2-fdf",
                    occupation:"董事长",
                    name:"王健林",
                pId:""},    //组织架构
                    {
                        uuid:"dsfwe-dsfcv-fdsf-fds-fdcvf",
                        occupation:"财务部经理",
                        name:"王思聪",
                        pId:"addf34-dfg2-bdfg3-dfef2-fdf"
                    },
                    {
                        uuid:"uhth-cvre-twer-xzcq-dsfg",
                        occupation:"人事部经理",
                        name:"司马懿",
                        pId:"addf34-dfg2-bdfg3-dfef2-fdf"
                    },
                    {
                        uuid:"cx-we-cfv-csew-cxve",
                        occupation:"技术部经理",
                        name:"吕布",
                        pId:"addf34-dfg2-bdfg3-dfef2-fdf"
                    },
                    {
                        uuid:"dsf-ewr-ewdsf-xcv-erwvc",
                        occupation:"销售部经理",
                        name:"孙尚香",
                        pId:"addf34-dfg2-bdfg3-dfef2-fdf"
                    }
                    ,{

                        uuid:"dsf-ewr-ewdsf-xcv-erwvc",
                        occupation:"employer",
                        name:"赵云",
                        pId:"dsfwe-dsfcv-fdsf-fds-fdcvf"

                    }
                    ,{

                        uuid:"sdf-ew-ewdvxcsf-xcxcv-ercwvc",
                        occupation:"employer",
                        name:"蒋干",
                        pId:"uhth-cvre-twer-xzcq-dsfg"

                    }
                    ,{

                        uuid:"cver-ewdfs-cvbc-rthf-vbfg",
                        occupation:"employer",
                        name:"张飞",
                        pId:"cx-we-cfv-csew-cxve"

                    }
                    ,{

                        uuid:"dfe-cvxc-ercx-cxv-xcv",
                        occupation:"employer",
                        name:"杨玉环",
                        pId:"dsf-ewr-ewdsf-xcv-erwvc"

                    }

                ],
                getRoots:function () {
                    var result = [];
                    this.content.forEach(function (d) {
                       if(d.pId === ""){
                           result.push(d)
                       }
                    });
                    return result;
                },
                getNodeByPid:function (pid) {
                    var result = [];
                    this.content.forEach(function (d) {
                        if(d.pId === pid){
                            result.push(d)
                        }
                    });
                    return result;
                }
            };
        }]);
    //自定义过滤器
    main.filter("prefix",["$timeout","$filter",function ($timeout,$filter) {
        return function (inputMsg) {

            var  result = "";

                var now = new Date();
                var nStr = $filter("date")(now,"yyyy-MM-dd HH:mm:ss:sss");
                result = inputMsg +"``"+nStr;

            return result;
        }
    }]);
    main.filter("bookTitleMark",["$filter",function () {
        return function (data) {
            // var result = [];
            // var now = ["钢铁是怎样炼成的","百年孤独","霍乱时期的爱情","从你的全世界路过"];
           // now.forEach(function (data) {
               // var book = "《"+data+"》";
               // result.push(book);
               return "《"+data+"》";
           // });

        }
    }]);
    main.controller("mainController",
    ["$scope","DataFactory","$filter","$interval",
    function ($scope,service,$filter,$interval) {
        $scope.book = ["钢铁是怎样炼成的","百年孤独","霍乱时期的爱情","从你的全世界路过"];
        $scope.uppercaseFilter = $filter("uppercase")("sdfwqqw");
        $scope.lowercaseFilter = $filter("lowercase")("ASDF");
        $scope.currencycaseFilter ="888888888";
     $scope.jsonObj = {
       name:"关羽",
         special:"金瓶梅",
         gender:"男",
         wife:"万茂",
         address:"蜀国"
     };
     $scope.filterFilter=[{
         name:"七号",
         gender:"!"
     },{
         name:"八号",
         gender:"？"
     }
     ];

        $interval(function () {
            $scope.nowString= new Date();
        },1);
        $scope.roots = service.getRoots();
        $scope.roots.forEach(function (root) {
            root.childern= service.getNodeByPid(root.uuid);
            root.childern.forEach(function (child) {
                child.grandSons = service.getNodeByPid(child.uuid);
            });
        });
        // $scope.node1 = service.getNodeByPid("dsfwe-dsfcv-fdsf-fds-fdcvf");
        // $scope.node2 = service.getNodeByPid("uhth-cvre-twer-xzcq-dsfg");
        // $scope.node3 = service.getNodeByPid("cx-we-cfv-csew-cxve");
        // $scope.node4 = service.getNodeByPid("dsf-ewr-ewdsf-xcv-erwvc");

    }]);
})(angular,window);