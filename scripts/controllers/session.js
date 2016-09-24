'use strict';

function sessionCtrl($scope, $state, $rootScope,AuthenticationService) {
  AuthenticationService.ClearCredentials();

  $scope.signin = function () {
    
    $state.go('user.signin');
  };

  $scope.submit = function () {
  
    $scope.dataLoading = true;
    AuthenticationService.Login($scope.email, $scope.password, function(response) {
      if(response.success) {

        AuthenticationService.SetCredentials($scope.email, $scope.password);

        console.log($rootScope.globals.currentUser.username);
        $rootScope.userType = $scope.password;

        $state.go('app.message');
        console.log($rootScope.userType);
      } else {
        $scope.error = response.message;
        $scope.dataLoading = false;
      }
    });
  };

  // $scope.submit = function () {
  //
  //
  //   if( $scope.email == "admin@admin.com"){
  //     $rootScope.userType = "admin";
  //   }
  //   else if($scope.email == "investor@investor.com"){
  //     $rootScope.userType = "investor";
  //   }
  //   else{
  //     $rootScope.userType = "client";
  //   }
  //   $state.go('app.message');
  //   console.log($rootScope.userType);
  // }

}

angular
  .module('urbanApp')
  .controller('sessionCtrl', ['$scope', '$state','$rootScope', 'AuthenticationService' , sessionCtrl]);
