(function()
{
    var app = angular.module('Mlab',['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider
           .when('/',{
           controller:'LoginController',
           templateUrl:'App/Views/Login.html'
        }).when('/Register',{
            controller: 'RegisterController',
            templateUrl : 'App/Views/Register.html'
        }).when('/Home',{
             controller:'HomeController',
            templateUrl : 'App/Views/Home.html'
        }).when('/Host',{
             controller:'HostController',
            templateUrl : 'App/Views/HostHome.html'
        }).when('/Judge',{
             controller:'AdminController',
            templateUrl : 'App/Views/AdminHome.html'
        }).when('/Users',{
             controller:'ResultsController',
            templateUrl : 'App/Views/Results.html'
        }).when('/Scores',{
             controller:'ScoresController',
            templateUrl : 'App/Views/Scores.html'
        })
        .otherwise({redirectTo:'/'});
        
    });
    
}());