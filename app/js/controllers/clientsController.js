'use strict';

angular.module('MechanicBookings.controllers')

    .controller('ClientsController', ['$scope', '$http', 'HttpMechanicService', function ($scope, $http, HttpMechanicService) {

        // -- Resolving a Promise in the Controller from the Service
        HttpMechanicService.getClientsListQ()
            .then(function (result) {
                $scope.clientsList = result;
            });

    }]);