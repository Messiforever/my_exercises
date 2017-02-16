/**
 * Created by Messi on 2017/2/8.
 */
(function (angular) {
    angular.module("Home",['ionic','ui.router','cordovaHTTP'])
        .controller("HomeController",["$scope","$http","$timeout","$ionicScrollDelegate",function ($scope,$http,$timeout,$ionicScrollDelegate) {
            $scope.bannerDragDown = function () {
                $scope.showSearch = false;
            };
            $scope.bannerDragRelease = function () {
                $timeout(function () {
                    $scope.showSearch = true;
                },800);

            };
            $scope.showSearch = true;
            $scope.doRefresh = function() {
                $scope.showSearch = false;
                $http.get('/service/item.json')  //注意改为自己本站的地址，不然会有跨域问题
                    .success(function(newItems) {
                        $scope.items = newItems;
                    })
                    .finally(function() {
                        $scope.$broadcast('scroll.refreshComplete');
                    });
            };
            $scope.$on('scroll.refreshComplete',function () {
                $timeout(function () {
                    $scope.showSearch = true;
                },800);
            });
            $scope.items= [
               {
                   "name":"HTML5"
               },
               {
                   "name":"JavaScript"
               },
               {
                   "name":"Css3"
               }
           ];
            $scope.fun=[
                {
                    title:"京东超市",
                    icon:"images/asset/icon7.png"
                },
                {
                    title:"全球购",
                    icon:"images/asset/icon1.png"
                },
                {
                    title:"服装城",
                    icon:"images/asset/icon10.png"
                },
                {
                    title:"京东生鲜",
                    icon:"images/asset/icon9.png"
                },
                {
                    title:"京东到家",
                    icon:"images/asset/icon6.png"
                },
                {
                    title:"充值中心",
                    icon:"images/asset/icon3.png"
                },
                {
                    title:"惠赚钱",
                    icon:"images/asset/icon4.png"
                },
                {
                    title:"领券",
                    icon:"images/asset/icon5.png"
                },
                {
                    title:"物流查询",
                    icon:"images/asset/icon8.png"
                },
                {
                    title:"我的关注",
                    icon:"images/asset/icon2.png"
                }
            ];
            $scope.wrapperStyle = {};
            $scope.wrapperStyleLeft = {};
            $scope.scrollTop = function() {
                var m =$ionicScrollDelegate.getScrollPosition().top;
                if(m<=100){
                    $scope.wrapperStyle.backgroundColor = "rgba(255,0,0,"+m/100+")";
                    // document.querySelector(".search-container").style.backgroundColor=
                    // "rgba(255,0,0,"+m/100+")";
                }
            };
                    // document.querySelector(".search-container").style.backgroundColor=
                    // "rgba(255,0,0,"+m/100+")";
           $scope.scan = function ()
            {

                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        if(!result.cancelled)
                        {
                            if(result.format == "QR_CODE")
                            {
                                navigator.notification.prompt("Please enter name of data",  function(input){
                                    var name = input.input1;
                                    var value = result.text;
                                    var data = localStorage.getItem("LocalData");
                                    console.log(data);
                                    data = JSON.parse(data);
                                    data[data.length] = [name, value];

                                    localStorage.setItem("LocalData", JSON.stringify(data));

                                    alert("Done");
                                });
                            }
                        }
                    },
                    function (error) {
                        alert("Scanning failed: " + error);
                    }
                );
            };
            if(localStorage.getItem("LocalData") == null)
            {
                var data = [];
                data = JSON.stringify(data);
                localStorage.setItem("LocalData", data);
            }
            $scope.location =function () {
                // onSuccess Callback
                // This method accepts a Position object, which contains the
                // current GPS coordinates
                //
                var onSuccess = function(position) {
                    alert('Latitude: '          + position.coords.latitude          + '\n' +
                        'Longitude: '         + position.coords.longitude         + '\n' +
                        'Altitude: '          + position.coords.altitude          + '\n' +
                        'Accuracy: '          + position.coords.accuracy          + '\n' +
                        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                        'Heading: '           + position.coords.heading           + '\n' +
                        'Speed: '             + position.coords.speed             + '\n' +
                        'Timestamp: '         + position.timestamp                + '\n');
                };

                // onError Callback receives a PositionError object
                //
                function onError(error) {
                    alert('code: '    + error.code    + '\n' +
                        'message: ' + error.message + '\n');
                }

                navigator.geolocation.getCurrentPosition(onSuccess, onError);


            };
            $scope.getLocation = function (position)
                {
                    navigator.geolocation.getCurrentPosition(onSuccess, onError);
                    //定位数据获取成功响应
                    function onSuccess(position) {
                        var latlon=position.coords.latitude+","+position.coords.longitude;

                        var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
                            +latlon+"&zoom=14&size=400x300&sensor=false";
                        document.querySelector("#mapholder").innerHTML="<img src='"+img_url+"'>";

                    }
                    function onError(error) {
                        alert('code: '    + error.code    + '\n' +
                            'message: ' + error.message + '\n');
                    }


            };
            $scope.getNetworkInfo = function () {
                function checkConnection() {
                    var networkState = navigator.connection.type;

                    var states = {};
                    states[Connection.UNKNOWN]  = 'Unknown connection';
                    states[Connection.ETHERNET] = 'Ethernet connection';
                    states[Connection.WIFI]     = 'WiFi connection';
                    states[Connection.CELL_2G]  = 'Cell 2G connection';
                    states[Connection.CELL_3G]  = 'Cell 3G connection';
                    states[Connection.CELL_4G]  = 'Cell 4G connection';
                    states[Connection.CELL]     = 'Cell generic connection';
                    states[Connection.NONE]     = 'No network connection';

                    alert('Connection type: ' + states[networkState]);
                }

                checkConnection();
            }
        }])
        .config(function ($stateProvider) {
             var main= {
                 name:"home",
                 url:"",
                 templateUrl: "views/main.html"
             };
             var page1= {
                 name:"page1",
                 url:"/Page1",
                 templateUrl: "views/Page1.html"
             };
             var page1_1 = {
                    name:"page1.page1-1",
                    url:"/Page1",
                    templateUrl:"views/page1-1.html"
            };
            var page1_2 = {
                name:"page1.page1-2",
                url:"/Page1",
                templateUrl:"views/page1-2.html"
            };
            var page1_3 = {
                name:"page1.page1-3",
                url:"/Page1",
                templateUrl:"views/page1-3.html"
            };
             var page2=  {
                 name:"page2",
                 url:"/page2",
                 templateUrl: "views/Page2.html"
             };
            var page3={
                name:"page3",
                 url:"/page3",
                 templateUrl: "views/Page3.html"
             };
            var page4={
                name:"page4",
                url:"/page4",
                templateUrl: "views/Page4.html"
            };
            $stateProvider.state(main);
            $stateProvider.state(page1_1);
            $stateProvider.state(page1_2);
            $stateProvider.state(page1_3);
            $stateProvider.state(page1);
            $stateProvider.state(page2);
            $stateProvider.state(page3);
            $stateProvider.state(page4);
     });
})(window.angular);