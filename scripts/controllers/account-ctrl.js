angular.module('urbanApp')
    .controller('AccountCtrl', ['$scope', '$http','$rootScope', AccountCtrl]);

function AccountCtrl($scope, $http,$rootScope) {

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/uhsr',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.accountList = result.data;
  });
};
