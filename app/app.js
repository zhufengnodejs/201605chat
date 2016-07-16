angular.module('zhufengchat',['ngRoute','angularMoment'])
.config(function($routeProvider){//配置路由
    $routeProvider.when('/',{
        templateUrl:'/pages/login.html',
        controller:'LoginCtrl'
    }).when('/rooms',{
        templateUrl:'/pages/rooms.html',
        controller:'RoomsCtrl'
    }).otherwise({
        redirectTo:'/'
    });
    //run 是系统启动后的第一个任务,一般用来注册监听
}).run(function($rootScope,$location){
    /*if(!$rootScope.user){
        $location.path('/');
    }*/
    if(sessionStorage.user){
        $rootScope.user = JSON.parse(sessionStorage.user);
    }
    $rootScope.$on('login',function(event,user){
        $rootScope.user = user;
        sessionStorage.user = JSON.stringify(user);
    });

});
