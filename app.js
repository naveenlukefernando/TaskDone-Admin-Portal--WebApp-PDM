angular.module("myApp",['ngRoute','myApp.worker_Index','myApp.worker_Add','myApp.worker_Update','myApp.client_Add','myApp.clients_Index','myApp.clients_Update'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    
    $routeProvider
            .otherwise ({
                redirectTo:"/page1"
            })

}]);