'use strict';

angular.module('MechanicBookings.controllers')

    .controller('BookingsController', ['$scope', '$location', 'MechanicService', function ($scope, $location, MechanicService) {
        
        $scope.clientsList = MechanicService.getClients();
        $scope.jobsList = MechanicService.getJobs();
        $scope.mechanicsList = MechanicService.getMechanics();
    
        // FROM http://stackoverflow.com/questions/14514461/how-can-angularjs-bind-to-list-of-checkbox-values
        $scope.jobsSelected = [];
        $scope.toggleSelection = function (jobname) {
            var idx = $scope.jobsSelected.indexOf(jobname);
            if (idx > -1) {
                $scope.jobsSelected.splice(idx, 1); //Remove '1' element(s) from the array at position 'idx' 
            }
            else {
                $scope.jobsSelected.push(jobname);
            }
        };
        // end jobsSelected
        
        $scope.submitBooking = function () {
            MechanicService.makeBooking($scope.client, $scope.jobsSelected, $scope.mechanicSelected, $scope.dateSelected);
            $location.path("/ConfirmBooking");
        };

        $scope.clearClientSelection = function () {
            $scope.client = {};
        };
        
        $scope.toJSON = function (obj) {
            return JSON.stringify(obj, null, 2);
        };
    }]);