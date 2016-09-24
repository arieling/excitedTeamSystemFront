/**
 * Created by Arie on 16/8/1.
 */
angular.module('urbanApp')
    .controller('FundCtrl', ['$scope', '$http','$rootScope', FundCtrl]);

function FundCtrl($scope, $http,$rootScope) {
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/2aj97',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.fundList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/2aj97',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.recommandFundList = result.data;
  });
};
