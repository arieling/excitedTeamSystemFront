/**
 * Created by Arie on 16/9/24.
 */
angular.module('urbanApp')
    .controller('userCtrl', ['$scope', '$http','$rootScope', userCtrl]);

function userCtrl($scope, $http,$rootScope) {

    $http({
        method: 'GET',
        url: 'https://api.myjson.com/bins/53yv0',
        headers: {'Content-Type': 'application/json'}
    }).success(function (result) {
        $scope.authFlag = result.data[0].authFlag;
        $scope.infoFlag = result.data[0].infoFlag;
        console.log($scope.infoFlag);
    });

};
