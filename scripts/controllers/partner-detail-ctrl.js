/**
 * Created by Arie on 16/8/1.
 */
/**
 * Created by Arie on 16/8/1.
 */
angular.module('urbanApp')
    .controller('PartnerDetailCtrl', ['$scope', '$http','$rootScope', PartnerDetailCtrl]);

function PartnerDetailCtrl($scope, $http,$rootScope) {

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/1b6vn',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.partnerDetailGeneralList = result.data;
  });

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/3rplv',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.partnerDetailContactList = result.data;
  });

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/4sd1v',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.partnerDetailIdentityList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/59q1v',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.partnerDetailAddressList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/3uhwz',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.partnerDetailAddress1List = result.data;
  });
};
