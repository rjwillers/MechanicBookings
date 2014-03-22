'use strict';

angular.module('MechanicBookings.controllers')

    .controller('ViewBookingsController', ['$scope', 'MechanicService', function ($scope, MechanicService) {

        $scope.bookingsList = MechanicService.getAllBookings();


        var generalCellTemplate = '<div class="ngCellText featureToggleGrid" ng-class="col.colIndex()"><span ng-cell-text>{{row.getProperty(col.field)}}</span></div>';
        var jobsCellTemplate = '<div class="ngCellText featureToggleGrid" ng-class="col.colIndex()"><span ng-cell-text>{{row.getProperty(col.field) | arrayDisplay}}</span></div>';

        $scope.gridOptions = {
            data: 'bookingsList',
            enableRowSelection: false,
            columnDefs: [
                { field: 'Client', displayName: 'Client', cellTemplate: generalCellTemplate, headerClass: 'centerAlignedHeader', width: 100 },
                { field: 'Jobs', displayName: 'Jobs', cellTemplate: jobsCellTemplate, headerClass: 'centerAlignedHeader', width: 200 },
                { field: 'Mechanic', displayName: 'Mechanic', cellTemplate: generalCellTemplate, headerClass: 'centerAlignedHeader', width: 100 },
                { field: 'Date', displayName: 'Date', cellTemplate: generalCellTemplate, headerClass: 'centerAlignedHeader', width: 100 }
            ]
        };

    }]);