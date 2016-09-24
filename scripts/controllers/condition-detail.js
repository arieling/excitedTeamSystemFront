/**
 * Created by Arie on 16/8/1.
 */
angular.module('urbanApp')
    .controller('ConditionDetailCtrl', ['$scope', '$http','$rootScope', ConditionDetailCtrl]);

function ConditionDetailCtrl($scope, $http,$rootScope) {
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/463cr',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.conditionDetailGeneralList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/223xr',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.conditionDetailAttachmentList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/xllr',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.conditionDetailCommentsList = result.data;
  });
};
