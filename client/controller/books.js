/**
 * Created by lt-117 on 16/12/16.
 */
var myBookStore = angular.module('myBookStore');

myBookStore.controller('BooksController', ['$scope',  '$location', '$http','$routeParams', function ($scope,  $location, $http, $routeParams) {
    $scope.getBooks = function () {
        $http.get('/bookstore/books').then(function (response) {
            $scope.books = response;
        });
    }
}]);