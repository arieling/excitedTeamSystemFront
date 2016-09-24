/**
 * Created by Arie on 16/9/24.
 */
angular.module('urbanApp')
    .controller('userCtrl', ['$scope', '$http','$rootScope', userCtrl]);

function userCtrl($scope, $http,$rootScope) {

    var userType = $rootScope.userType;

    $http({
        method: 'GET',
        url: 'https://api.myjson.com/bins/4q238',
        headers: {'Content-Type': 'application/json'}
    }).success(function (result) {
        $scope.id = result.data[0].id;
        $scope.name = result.data[0].name;
        $scope.start_date = result.data[0].start_date;
        $scope.authFlag = result.data[0].authFlag;
        $scope.infoFlag = result.data[0].infoFlag;
        $scope.legal_person = result.data[0].legal_person;
        $scope.credit = result.data[0].credit;
        $scope.asset = result.data[0].asset;
        $scope.userList = result.data;
        $scope.isPending = false;
        console.log(result.data[0]);
    });

    var register = function() {
        $scope.isPending = true;
        $state.go('app.account');
    }

};
