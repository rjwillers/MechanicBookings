'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
    beforeEach(module('MechanicBookings.filters'));


  describe('interpolate', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });

  describe("arrayDisplay filter tests > ", function () {

      var $filter;

      beforeEach(function () {
          inject(function (_$filter_) {
              $filter = _$filter_;
          });
      });

      it("should be defined", function () {
          expect($filter('arrayDisplay')).toBeDefined();
          expect($filter('arrayDisplay')).not.toEqual(null);
      });


      it('should unwrap array with values', function () {
          var data = ["BB78286", "bb78580", "CC79092", "BB75329", "BB73472"];
          var expected = {"BB78286, bb78580, CC79092, BB75329, BB73472"};

          var filtered = $filter('arrayDisplay')(data);
          expect(filtered).toEqual(expected);
      });

      it('should return empty string object for empty array', function () {
          var data = [];
          var expected = "";

          var filtered = $filter('arrayDisplay')(data);
          expect(filtered).toEqual(expected);
      });

      });

  });


});
