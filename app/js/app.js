'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('MechanicBookings', [
    'ngRoute',
    'ngGrid',
    'MechanicBookings.filters',
    'MechanicBookings.services',
    'MechanicBookings.directives',
    'MechanicBookings.controllers'
    ])
    
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/ClientsList', {
            templateUrl: 'partials/ClientsList.tpl.html',
            controller: 'ClientsController'
        });
        $routeProvider.when('/JobsList', {
            templateUrl: 'partials/JobsList.tpl.html',
            controller: 'JobsController'
        });
        $routeProvider.when('/MakeBooking', {
            templateUrl: 'partials/MakeBooking.tpl.html',
            controller: 'BookingsController'
        });
        $routeProvider.when('/ConfirmBooking', {
            templateUrl: 'partials/ConfirmBooking.tpl.html',
            controller: 'ConfirmBookingsController'
        });
        $routeProvider.when('/Success', {
            templateUrl: 'partials/Success.tpl.html',
        });
        $routeProvider.when('/ViewBookings', {
            templateUrl: 'partials/ViewBookings.tpl.html',
            controller: 'ViewBookingsController'
        });
        $routeProvider.when('/CarsSlider', {
            templateUrl: 'partials/CarsSlider.tpl.html',
            controller: 'CarsSliderController'
        });
        $routeProvider.otherwise({
            redirectTo: '/MakeBooking'
        });
        
    }]);
