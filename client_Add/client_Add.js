angular.module("myApp.client_Add",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){

    $routeProvider
        .when('/client_Add',
        {   templateUrl:"client_Add/client_Add.html",
            controller:"client_AddCtrl"
            
        })

}])
.controller('client_AddCtrl',function($scope,$firebaseArray){
    $scope.add_User = function (){
        var ref = firebase.database().ref("user_client");  //this is the table name which adding to data.
        $firebaseArray(ref).$add($scope.user_client)
        .then(
            function(ref){
                $scope.user_client.name = ""
                $scope.user_client.email= ""
                $scope.user_client.phone = ""
            },
            function(error){
                console.log(error);
            }
        )
    };
    console.log('client_Add');
});