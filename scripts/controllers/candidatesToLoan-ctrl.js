/**
 * Created by Arie on 16/9/24.
 */


angular.module('urbanApp')
    .controller('candidatesToLoanCtrl', ['$scope', '$http','$rootScope', candidatesToLoanCtrl]);

function candidatesToLoanCtrl($scope, $http,$rootScope) {
    $http({
        method: 'GET',
        url: 'https://api.myjson.com/bins/2obro',
        headers: {'Content-Type': 'application/json'}
    }).success(function (result) {
        $scope.candidateList = result.data;
    });
};
