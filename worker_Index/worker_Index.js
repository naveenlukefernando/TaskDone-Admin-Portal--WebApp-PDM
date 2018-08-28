angular.module("myApp.worker_Index",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){

    $routeProvider
        .when('/worker_Index',
        {   templateUrl:"worker_Index/worker_Index.html",
            controller:"worker_IndexCtrl"
            
        })

}])
.controller('worker_IndexCtrl',function($scope,$firebaseArray){

    var ref = firebase.database().ref("user_worker");  //this is the table name which adding to data.
    $scope.data = $firebaseArray(ref);  //this will retrive the data from the firebase soo 

    $scope.deleteUser = function (info){

        $scope.data
        .$remove(info)
        .then(
            function(ref){
                console.log(error);
            },
            function(ref){
                console.log(error);
            }
        )
        console.log(info);

    }

    console.log('worker_Index');
});