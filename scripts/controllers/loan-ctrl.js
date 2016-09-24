/**
 * Created by Arie on 16/8/6.
 */
angular.module('urbanApp')
  .controller('LoanCtrl', ['$scope', '$http', LoanCtrl]);

function LoanCtrl($scope, $http) {

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/sh43',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.loanList = result.data;
  });
};
