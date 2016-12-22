/**
 * Created by lt-117 on 16/12/16.
 */
var myBookStore = angular.module('myBookStore', ['ngRoute']);

myBookStore.config(function ($routeProvider, $locationProvider ) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
            controller:'BooksController',
            templateUrl:'views/books.html'
       })
       .when('/books', {
            controller:'BooksController',
            templateUrl:'views/books.html'
       })
       .when('/books/details/id',{
           controller: 'BooksController',
           templateUrl:'views/book_details.html'
       })
       .when('/books/add', {
            controller: 'BooksController',
            templateUrl: 'views/add_book.html'
        })
       .when('/books/edit/:id', {
            controller: 'BooksController',
            templateUrl: 'views/edit_book.html'
        })
       .otherwise({
            redirectTo: '/'
       });
});