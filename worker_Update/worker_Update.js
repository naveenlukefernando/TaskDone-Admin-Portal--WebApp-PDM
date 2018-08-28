angular.module("myApp.worker_Update",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){

    $routeProvider
        .when('/worker_Update/:id',
        {   templateUrl:"worker_Update/worker_Update.html",
            controller:"worker_UpdateCtrl"
            
        })

}])
.controller('worker_UpdateCtrl',function($scope,$firebaseArray,$firebaseObject,$routeParams){
   
    
    var id = $routeParams.id;
    var ref = firebase.database().ref("user_worker/"+id);
    $scope.user_worker = $firebaseObject(ref);
   
   
    
    $scope.editUser = function(id){
        console.log('worker_Update inside');

        var ref = firebase.database().ref("user_worker/"+id);
       console.log(id)
       ref.update({
           name:$scope.user_worker.name,
           email:$scope.user_worker.email,
           phone:$scope.user_worker.phone,
       
        }).then(function(ref)
        { 
            $scope.user_worker.name = "";
            $scope.user_worker.email = "";
            $scope.user_worker.phone = "" ;
        },function(error){
            console.log(error);
        }
    
    );

    }


    console.log('worker_Update');
}); 