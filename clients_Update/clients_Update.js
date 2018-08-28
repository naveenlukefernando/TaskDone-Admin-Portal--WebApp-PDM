angular.module("myApp.clients_Update",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){

    $routeProvider
        .when('/clients_Update/:id',
        {   templateUrl:"clients_Update/clients_Update.html",
            controller:"clients_UpdateCtrl"
            
        })

}])
.controller('clients_UpdateCtrl',function($scope,$firebaseArray,$firebaseObject,$routeParams){
   
    
    var id = $routeParams.id;
    var ref = firebase.database().ref("user_client/"+id);
    $scope.user_client = $firebaseObject(ref);
   
   
    
    $scope.editUserup = function(id){
        console.log('clients_Update inside');

        var ref = firebase.database().ref("user_client/"+id);
       console.log(id)
       ref.update({
           name:$scope.user_client.name,
           email:$scope.user_client.email,
           phone:$scope.user_client.phone,
       
        }).then(function(ref)
        { 
            $scope.user_client.name = "";
            $scope.user_client.email = "";
            $scope.user_client.phone = "" ;
        },function(error){
            console.log(error);
        }
    
    );

    }


    console.log('clients_Update');
}); 