/**
 * Created by Arie on 16/8/1.
 */
angular.module('urbanApp')
    .controller('MessageCtrl', ['$scope', '$http','$rootScope', MessageCtrl]);

function MessageCtrl($scope, $http,$rootScope) {

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/4tcgv',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.messageList = result.data;
  });
};
