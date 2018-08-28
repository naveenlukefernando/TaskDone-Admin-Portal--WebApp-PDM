angular.module("myApp.worker_Add",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){

    $routeProvider
        .when('/worker_Add',
        {   templateUrl:"worker_Add/worker_Add.html",
            controller:"worker_AddCtrl"
            
        })

}])
.controller('worker_AddCtrl',function($scope,$firebaseArray){
    $scope.add_User = function (){
        var ref = firebase.database().ref("user_worker");  //this is the table name which adding to data.
        $firebaseArray(ref).$add($scope.user_worker)
        .then(
            function(ref){
                $scope.user_worker.name = ""
                $scope.user_worker.email= ""
                $scope.user_worker.phone = ""
            },
            function(error){
                console.log(error);
            }
        )
    };
    console.log('worker_Add');
});