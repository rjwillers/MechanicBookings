'use strict';

/* Services */
angular.module('MechanicBookings.services', ['ngResource'])

    .value('version', '1.0')
    .constant('API_KEY', 'xR0mBpAlcRrEzh-tsgpevYbwsRGClWws')
    
    .factory('MechanicService', function ($resource, API_KEY) {

        var bookingsResource = $resource('https://api.mongolab.com/api/1/databases/mechanicbookings/collections/Bookings' + '/:id', {
            apiKey: API_KEY,
            id: '@_id.$oid'
        });

        var clientsResource = $resource('https://api.mongolab.com/api/1/databases/mechanicbookings/collections/Clients' + '/:id', {
            apiKey: API_KEY,
            id: '@_id.$oid'
        });

        var jobsResource = $resource('https://api.mongolab.com/api/1/databases/mechanicbookings/collections/Jobs' + '/:id', {
            apiKey: API_KEY,
            id: '@_id.$oid'
        });

        var mechanicsResource = $resource('https://api.mongolab.com/api/1/databases/mechanicbookings/collections/Mechanics' + '/:id', {
            apiKey: API_KEY,
            id: '@_id.$oid'
        });


        //private booking object persisted across controllers
        var _booking = {
            client: {},
            jobsList: [],
            mechanic: {},
            date: ''
        };

        //factory return object
        return {
            getClients: function () {
                return clientsResource.query();
            },

            getJobs: function () {
                return jobsResource.query();
            },

            getMechanics: function () {
                return mechanicsResource.query();
            },

            makeBooking: function (inClient, inJobsList, inMechanic, inDate) {
                _booking.client = inClient;
                _booking.jobsList = inJobsList;
                _booking.mechanic = inMechanic;
                _booking.date = inDate;

                return true;
            },

            retrieveBooking: function () {
                return _booking;
            },

            confirmBooking: function () {
                var bookingDto = {Client: _booking.client.name, Jobs: _booking.jobsList, Mechanic: _booking.mechanic.name, Date: _booking.date};
                var mongoBooking = new bookingsResource(bookingDto);
                mongoBooking.$save();
                return true;
            },

            getAllBookings: function () {
                return bookingsResource.query();
            }
        };
    })


    .factory('HttpMechanicService', function ($http, $q) {
        return {
            getClientsListPromise: function () {
                return $http.get('js/testdata/clients.json'); //returns a Promise
            },
            getClientsListQ: function () {
                var deferred = $q.defer();
                var clients;
                $http.get('js/testdata/clients.json').then(function (data) {
                    clients = data;
                    deferred.resolve(clients.data);
                });
                return deferred.promise; //returns a Promise - don't see a reason to use this version instead of the one above
            },
            getJobsListQ: function () {
                var deferred = $q.defer();
                var jobs;
                $http.get('js/testdata/jobs.json').then(function (data, status, headers, config) {
                    jobs = data;
                    deferred.resolve(jobs.data);
                },
                    function (data, status, headers, config) {
                        deferred.reject();
                    });
                return deferred.promise;
            }
        };
    });