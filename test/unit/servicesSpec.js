'use strict';

describe('Service', function () {

    beforeEach(module('MechanicBookings.services'));

    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('1.0');
        }));
    });
    
    describe('HttpMechanicService', function () {

        var HttpMechanicService;
        var $httpBackend;

        beforeEach(function () {
            inject(function (_HttpMechanicService_, _$httpBackend_) {
                HttpMechanicService = _HttpMechanicService_; // underscores are automatically stripped off
                $httpBackend = _$httpBackend_;
            });
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should be defined', function () {
            expect(HttpMechanicService).toBeDefined();
            expect(HttpMechanicService).not.toBe(null);    //same thing as above
            expect(HttpMechanicService).not.toBeUndefined; //same thing as above
        });

        it('should have method getJobsListQ defined', function () {
            
        });

        it('should get jobs when method getJobsListQ is called', function () {

            expect(HttpMechanicService.getJobsListQ).toBeDefined();

            var responseObject = [{ "name": "minor service", "cost": "200" }];
            $httpBackend.whenGET('js/testdata/jobs.json').respond(responseObject);

            HttpMechanicService.getJobsListQ();
            $httpBackend.flush();
        });

        it('should get clients when method getClientsListQ is called', function () {

            expect(HttpMechanicService.getClientsListQ).toBeDefined();

            var responseObject = [{ "name": "Serena", "email": "serena@mail.com" }];
            $httpBackend.whenGET('js/testdata/clients.json').respond(responseObject);

            var clients = HttpMechanicService.getClientsListQ();
            $httpBackend.flush();
        });

        it('should get clients when method getClientsListPromise is called', function () {

            expect(HttpMechanicService.getClientsListPromise).toBeDefined();

            var responseObject = [{ "name": "Serena", "email": "serena@mail.com" }];
            $httpBackend.whenGET('js/testdata/clients.json').respond(responseObject);

            var clients = HttpMechanicService.getClientsListPromise();
            $httpBackend.flush();
        });

    });

    describe('MechanicService', function () {

        var MechanicService;
        var $httpBackend;

        beforeEach(function () {
            inject(function (_MechanicService_, _$httpBackend_) {
                MechanicService = _MechanicService_; // underscores are automatically stripped off
                $httpBackend = _$httpBackend_;
            });
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should be defined', function () {
            expect(MechanicService).toBeDefined();
        });

        it('should get clients when method getClients is called', function () {
            expect(MechanicService.getClients).toBeDefined();

            var responseObject = [{ "name": "Serena", "email": "serena@mail.com" }];
            $httpBackend.whenGET('https://api.mongolab.com/api/1/databases/mechanicbookings/collections/Clients?apiKey=xR0mBpAlcRrEzh-tsgpevYbwsRGClWws').respond(responseObject);

            MechanicService.getClients();
            $httpBackend.flush();
        });

        it('should get jobs when method getJobs is called', function () {
            expect(MechanicService.getJobs).toBeDefined();

            var responseObject = [{ "name": "minor service", "cost": "200" }];
            $httpBackend.whenGET('https://api.mongolab.com/api/1/databases/mechanicbookings/collections/Jobs?apiKey=xR0mBpAlcRrEzh-tsgpevYbwsRGClWws').respond(responseObject);

            MechanicService.getJobs();
            $httpBackend.flush();
        });

        it('should get mechanics when method getMechanics is called', function () {
            expect(MechanicService.getMechanics).toBeDefined();

            var responseObject = [{ "name": "Andy" }];
            $httpBackend.whenGET('https://api.mongolab.com/api/1/databases/mechanicbookings/collections/Mechanics?apiKey=xR0mBpAlcRrEzh-tsgpevYbwsRGClWws').respond(responseObject);

            MechanicService.getMechanics();
            $httpBackend.flush();
        });

        it('should make a booking when method makeBooking is called', function () {
            expect(MechanicService.makeBooking).toBeDefined();

            spyOn(MechanicService, 'makeBooking');
            MechanicService.makeBooking('serena', ['minor service'], 'Andy', '2014-02-01');

            expect(MechanicService.makeBooking).toHaveBeenCalled();

        });

        //it('should confirm a booking when method confirmBooking is called', function () {
        //    expect(MechanicService.confirmBooking).toBeDefined();

        //    var responseObject = [{ "Client": "Masha", "Job": "gear works", "Mechanic": "Andy", "Date": "2014-03-01" }];
        //    $httpBackend.whenPOST('https://api.mongolab.com/api/1/databases/mechanicbookings/collections/Bookings?apiKey=xR0mBpAlcRrEzh-tsgpevYbwsRGClWws').respond(responseObject);

        //    MechanicService.confirmBooking();
        //    $httpBackend.flush();
        //});

        it('should get all bookings when method getAllBookings is called', function () {
            expect(MechanicService.getAllBookings).toBeDefined();

            var responseObject = [{ "Client": "Masha", "Job": "gear works", "Mechanic": "Andy", "Date": "2014-03-01" }];
            $httpBackend.whenGET('https://api.mongolab.com/api/1/databases/mechanicbookings/collections/Bookings?apiKey=xR0mBpAlcRrEzh-tsgpevYbwsRGClWws').respond(responseObject);

            MechanicService.getAllBookings();
            $httpBackend.flush();
        });

        it('should get all bookings when method retrieveBooking is called', function () {
            expect(MechanicService.retrieveBooking).toBeDefined();

            var responseObject = [{ "Client": "Masha", "Job": "gear works", "Mechanic": "Andy", "Date": "2014-03-01" }];
            spyOn(MechanicService, 'retrieveBooking').andReturn(responseObject);
            
            var _booking = MechanicService.retrieveBooking();
            expect(_booking).toEqual(responseObject);
        });

    });

});
