'use strict';

/* Directives */


angular.module('MechanicBookings.directives', [])
    .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }])

    .directive('pageLinks', function () {
        return {
            restrict: 'AE',
            templateUrl: 'partials/Main.tpl.html',
            transclude: true
        };
    })

    .directive('focusOnElement', function ($timeout) {

        function focusAfterTimeout($timeout, element, timeoutValue) {
            $timeout(function () {
                element.focus();
            }, timeoutValue);
        }

        return {
            restrict: 'A',
            link: function (scope, element, attrs, controller) {
                var expression = attrs.focusOnElement;

                if (expression) {
                    focusAfterTimeout($timeout, $('[name="' + expression + '"]'), 200);
                } else {
                    focusAfterTimeout($timeout, element, 200);
                }
            }
        };
    });
