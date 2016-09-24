/**
 * Created by Arie on 16/8/1.
 */
angular.module('urbanApp')
    .controller('FundDetailCtrl', ['$scope', '$http','$rootScope', FundDetailCtrl]);

function FundDetailCtrl($scope, $http,$rootScope) {

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/2wx6k',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.fundDetailGeneralList = result.data;
    $scope.accountType = $rootScope.userType;
  }); 
};
