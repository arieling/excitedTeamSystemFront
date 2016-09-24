/**
 * Created by Arie on 16/8/1.
 */
angular.module('urbanApp')
    .controller('LoanDetailCtrl', ['$scope', '$http','$rootScope', LoanDetailCtrl]);

function LoanDetailCtrl($scope, $http,$rootScope) {

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/20mmb',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.loanGeneralList = result.data;
  });

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/2v7rz',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.loanBusinessPartnerList = result.data;
  });

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/2v7rz',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.loanSubjectProperityList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/21uof',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.loanConditionList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/118rz',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.loanRelatedFundList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/59mvz',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.loanScheduledPaymentList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/223xr',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.loanAttachmentList = result.data;
  });
  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/xllr',
    headers: {'Content-Type': 'application/json'}
  }).success(function (result) {
    $scope.loanCommentsList = result.data;
  });
  //
    //
    // $(document).ready(function() {
    //     $('#loanGeneral').DataTable({
    //         "bSort" : false,
    //         'ajax': {
    //             url: 'https://api.myjson.com/bins/20mmb'
    //         },
    //         'columns': [
    //             { "data": "name" },
    //             { "data": "value" },
    //             { "data": null }
    //         ],
    //         "columnDefs": [ {
    //             "targets": -1,
    //             "data": null,
    //             "defaultContent": "<button>Edit</button>"
    //         } ]
    //     });
    //
    //     $('#loanBusinessPartner').DataTable({
    //         'ajax': {
    //             url: 'https://api.myjson.com/bins/2v7rz'
    //         },
    //         'columns': [
    //             { "data": "role" },
    //             { "data": "name" },
    //             { "data": "address" },
    //             { "data": null }
    //         ],
    //         "columnDefs": [ {
    //             "targets": -1,
    //             "data": null,
    //             "defaultContent": "<a href='#/partnerDetail'>View</a> <button>Delete</button>"
    //         } ]
    //     });
    //     $('#loanSubjectProperity').DataTable({
    //         'ajax': {
    //             url: 'https://api.myjson.com/bins/2v7rz'
    //         },
    //         'columns': [
    //             { "data": "name" },
    //             { "data": "address" },
    //             { "data": "propertyValue" },
    //             { "data": null }
    //         ],
    //         "columnDefs": [ {
    //             "targets": -1,
    //             "data": null,
    //             "defaultContent": "<a href='#/properityDetail'>View</a> <button>Delete</button>"
    //         } ]
    //     });
    //
    //     $('#loanCondition').DataTable({
    //         'ajax': {
    //             url: 'https://api.myjson.com/bins/21uof'
    //         },
    //         'columns': [
    //             { "data": "name" },
    //             { "data": "status" },
    //             { "data": "required" },
    //             { "data": null }
    //         ],
    //         "columnDefs": [ {
    //             "targets": -1,
    //             "data": null,
    //             "defaultContent": "<a href='#/conditionDetail'>View</a> <button>Delete</button>"
    //         } ]
    //     });
    //     $('#loanRelatedFund').DataTable({
    //         'ajax': {
    //             url: 'https://api.myjson.com/bins/118rz'
    //         },
    //         'columns': [
    //             { "data": "lender" },
    //             { "data": "status" },
    //             { "data": "fundsAmount" },
    //             { "data": null }
    //         ],
    //         "columnDefs": [ {
    //             "targets": -1,
    //             "data": null,
    //             "defaultContent": "<button>Edit</button> <button>Delete</button>"
    //         } ]
    //     });
    //     $('#loanScheduledPayment').DataTable({
    //         'ajax': {
    //             url: 'https://api.myjson.com/bins/59mvz'
    //         },
    //         'columns': [
    //             { "data": "Date" },
    //             { "data": "Amount" },
    //             { "data": "Amount" },
    //             { "data": "Status" },
    //             { "data": null }
    //         ],
    //         "columnDefs": [ {
    //             "targets": -1,
    //             "data": null,
    //             "defaultContent": "<button>Edit</button> <button>Delete</button>"
    //         } ]
    //     });
    //     $('#loanAttachment').DataTable({
    //         'ajax': {
    //             url: 'https://api.myjson.com/bins/223xr'
    //         },
    //         'columns': [
    //             { "data": "FileName" },
    //             { "data": "FileType" },
    //             { "data": "Description" },
    //             { "data": "CreatedDate" },
    //             { "data": null }
    //         ],
    //         "columnDefs": [ {
    //             "targets": -1,
    //             "data": null,
    //             "defaultContent": "<button>Edit</button> <button>Delete</button>"
    //         } ]
    //     });
    //     $('#loanComments').DataTable({
    //         'ajax': {
    //             url: 'https://api.myjson.com/bins/xllr'
    //         },
    //         'columns': [
    //             { "data": "Content" },
    //             { "data": "Author" },
    //             { "data": "CreatedDate" },
    //             { "data": null }
    //         ],
    //         "columnDefs": [ {
    //             "targets": -1,
    //             "data": null,
    //             "defaultContent": "<button>Edit</button> <button>Delete</button>"
    //         } ]
    //     });
    // } );
};
