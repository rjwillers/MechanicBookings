'use strict';

/* jasmine specs for directives go here */

describe('directives', function () {

    beforeEach(module('MechanicBookings.directives'));

    describe('app-version', function () {

        it('should print current version', function () {
            module(function ($provide) {
                $provide.value('version', 'TEST_VER');
            });
            inject(function ($compile, $rootScope) {
                var element = $compile('<span app-version></span>')($rootScope);
                expect(element.text()).toEqual('TEST_VER');
            });
        });

    });

    describe('focus-on-element', function () {

        describe('directive on an element', function () {
            var element;
            beforeEach(inject(function ($compile, $rootScope) {
                var $scope = $rootScope.$new();
                var markup = '<form name="bookingForm" ng-submit="submitBooking()" >' +
                                '<select ng-model="client" ng-options="cl.name for cl in clientsList" name="selectClient" focus-on-element="selectClient">' +
                                    '<option value="">- Select -</option>' +
                                '</select>' +
                             '</form>'
                element = angular.element(markup);
                $compile(markup)($rootScope);
                $scope.$digest();
            }));

            xit('should focus on the element the directive is placed on', function () {
                //expect(element.is(':focus')).toBe(true);

                //can't find a way to test whether element has focus, so could not test
                
            });

        });

        xdescribe('directive on the form', function () {
            var element;
            beforeEach(inject(function ($compile, $rootScope) {
                var $scope = $rootScope.$new();
                var markup = '<form name="bookingForm" ng-submit="submitBooking()" focus-on-element="selectClient">' +
                                '<select ng-model="client" ng-options="cl.name for cl in clientsList" name="selectClient"' +
                                    '<option value="">- Select -</option>' +
                                '</select>' +
                             '</form>'

                element = angular.element(markup);
                $compile(markup)($rootScope);
                $scope.$digest();
            }));

            it('should focus on the element the directive contains the name of when placed on the form', function () {
                //expect(element.is(':focus')).toBe(false);

                //can't find a way to test whether element has focus, so could not test
            });

        });

    });

});
