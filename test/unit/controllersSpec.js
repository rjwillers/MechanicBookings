'use strict';

/* jasmine specs for controllers go here */

describe('Controllers', function () {

    beforeEach(module('MechanicBookings.controllers', function ($provide) {
        $provide.value('MechanicService', FakeMechanicService);
        $provide.value('$location', FakeLocation);
    }));

    describe('BookingsController', function () {

        var $scope, ctrl;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            ctrl = $controller('BookingsController', {
                $scope: $scope
            });
        }));


        it('should have a list of all clients in $scope.clientsList', function () {
            expect($scope.clientsList).toEqual([{ name: "abc", email: "abc@mail.com" }]);
        });

        it('should have a list of all jobs in $scope.jobsList', function () {
            expect($scope.jobsList).toEqual([{ name: "minor service", cost: "200" }]);
        });

        it('should have a list of all mechanics in $scope.mechanicsList', function () {
            expect($scope.mechanicsList).toEqual([{ "name": "Roger" }]);
        });

        it('jobsSelected should be empty by default', function () {
            expect($scope.jobsSelected).toEqual([]);
        });

        it('toggleSelection should push a job in the list if it does not exist already', function () {
            $scope.toggleSelection('minor service');
            expect($scope.jobsSelected).toEqual(['minor service']);
        });

        it('toggleSelection should remove a job in the list if it exists already', function () {
            $scope.toggleSelection('minor service');
            $scope.toggleSelection('minor service');
            expect($scope.jobsSelected).toEqual([]);
        });

        it('makeBooking should call makeBooking method of the service and change $location to ConfirmBooking page', function () {
            spyOn(FakeLocation, 'path');
            spyOn(FakeMechanicService, 'makeBooking');

            $scope.submitBooking();
            expect(FakeLocation.path).toHaveBeenCalledWith('/ConfirmBooking');
            expect(FakeMechanicService.makeBooking).toHaveBeenCalled();
        });
        
        it('should clear the selected client when clearClientSelection is called', function () {
            $scope.clearClientSelection();
            expect($scope.client).toEqual({});
        });
    });

    describe('ConfirmBookingsController', function () {

        var $scope, ctrl;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            ctrl = $controller('ConfirmBookingsController', {
                $scope: $scope
            });
        }));

        it('should change $location path to Success when confirmBooking is called', function () {
            spyOn(FakeLocation, 'path');
            //spyOn(FakeMechanicService, 'confirmBooking');

            $scope.confirmBooking();
            expect(FakeLocation.path).toHaveBeenCalledWith('/Success');
        });

        it('should bring retrieve the booking under confirmation when $scope.booking is called', function () {
            expect($scope.booking).toEqual([{ "Client": "Masha", "Job": "gear works", "Mechanic": "Andy", "Date": "2014-03-01" }]);
        });
    });

    describe('ClientsController', function () {

        var $scope, ctrl, deferred, FakeHttpMechanicService;
        var mockData = [{ name: "abc", email: "abc@mail.com" }];

        beforeEach(inject(function ($rootScope, $controller, $q) {
                        
            FakeHttpMechanicService = {
                getClientsListQ: function () {
                    deferred = $q.defer();
                    return deferred.promise;
                }
            };

            spyOn(FakeHttpMechanicService, 'getClientsListQ').andCallThrough();

            $scope = $rootScope.$new();
            ctrl = $controller('ClientsController', {
                $scope: $scope,
                HttpMechanicService: FakeHttpMechanicService
            });
        }));
        
        it('should have a list of all clients in $scope.clientsList', function () {
            deferred.resolve(mockData);
            $scope.$digest();
            expect(FakeHttpMechanicService.getClientsListQ).toHaveBeenCalled();
            expect($scope.clientsList).toBe(mockData);
        });
    });

    describe('JobsController', function () {

        var $scope, ctrl, deferred, FakeHttpMechanicService;
        var mockData = [{ name: "minor service", cost: "200" }];

        beforeEach(inject(function ($rootScope, $controller, $q) {

            FakeHttpMechanicService = {
                getJobsListQ: function () {
                    deferred = $q.defer();
                    return deferred.promise;
                }
            };

            spyOn(FakeHttpMechanicService, 'getJobsListQ').andCallThrough();

            $scope = $rootScope.$new();
            ctrl = $controller('JobsController', {
                $scope: $scope,
                HttpMechanicService: FakeHttpMechanicService
            });
        }));

        it('should have a list of all Jobs in $scope.JobsList', function () {
            deferred.resolve(mockData);
            $scope.$digest();
            expect(FakeHttpMechanicService.getJobsListQ).toHaveBeenCalled();
            expect($scope.JobsList).toBe(mockData);
        });
    });
});
