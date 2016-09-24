/**
 * Created by Arie on 16/8/1.
 */

/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('urbanApp')
    .controller('PropertyDetailCtrl', ['$scope', '$http','$rootScope', PropertyDetailCtrl]);

function PropertyDetailCtrl($scope, $http,$rootScope) {

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/1rhar',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.propertyDetailAddressList = result.data;
  });

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/2uhmb',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.propertyDetailGeneralList = result.data;
  });
};
