(function () {
    'use strict';
    angular.module('sampleApp')
        .controller('MainCtrl', function ($scope, $log) {

            var init = function() {

            	$scope.inputList = [
            	                    {name: 'value1'},
            	                    {name: 'value2'},
            	                    {name: 'value3'},
            	                    {name: 'abc'},
            	                    {name: 'bcd'},
            	                    {name: 'cdf'},
            	                    {name: 'gvalue'}
            	                    ];

            };
            init();

        });
}());
