angular.module("myApp.clients_Index",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){

    $routeProvider
        .when('/clients_Index',
        {   templateUrl:"clients_Index/clients_Index.html",
            controller:"clients_IndexCtrl"
            
        })

}])
.controller('clients_IndexCtrl',function($scope,$firebaseArray){

    var ref = firebase.database().ref("user_client");  //this is the table name which adding to data.
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

    console.log('clients_Index');
});