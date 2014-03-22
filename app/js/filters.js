'use strict';

/* Filters */

angular.module('MechanicBookings.filters', []).
    filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }])

    .filter('arrayDisplay', function () {
        return function (dataArray) {
            var domEls = "";
            for (var i = 0, len = dataArray.length; i < len; i++) {
                if ((i + 1) != len) {
                    domEls += dataArray[i] + ', ';
                } else {
                    domEls += dataArray[i];
                }
            }
            return domEls;
        };
    });
