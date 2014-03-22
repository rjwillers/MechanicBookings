'use strict';

angular.module('MechanicBookings.controllers')

    .controller('JobsController', ['$scope', '$http', 'HttpMechanicService', function ($scope, $http, HttpMechanicService) {

        HttpMechanicService.getJobsListQ().then(function (result) {
            $scope.JobsList = result;
        });
    }]);