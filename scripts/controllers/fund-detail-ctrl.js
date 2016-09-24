/**
 * Created by Arie on 16/8/1.
 */
angular.module('urbanApp')
    .controller('FundDetailCtrl', ['$scope', '$http','$rootScope', FundDetailCtrl]);

function FundDetailCtrl($scope, $http,$rootScope) {

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/35vcb',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.fundDetailGeneralList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/2v7rz',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.fundDetailBusinessPartnerList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/21uof',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.fundDetailConditionList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/223xr',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.fundDetailAttachmentList = result.data;
  });  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/xllr',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.fundDetailCommentsList = result.data;
  });
};
