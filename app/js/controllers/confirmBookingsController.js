'use strict';

angular.module('MechanicBookings.controllers')

    .controller('ConfirmBookingsController', ['$scope', '$location', 'MechanicService', function ($scope, $location, MechanicService) {

        $scope.booking = MechanicService.retrieveBooking();

        $scope.confirmBooking = function () {
            if (MechanicService.confirmBooking()) {
                $location.path("/Success");
            }
        };
        
        //$scope.toJSON = function (obj) {
        //    return JSON.stringify(obj, null, 2);
        //};
    }]);