(function () {
    'use strict';
    angular
    .module('sampleApp')
    .directive('vtFilterSelect',
        function ($timeout, $filter) {
            return {
                restrict    : 'E',
                replace     : true,
                require     : '^ngModel',
                scope       : { ngModel : '=',
                				ngSelectedItems: '=',
                				ngIsError: '=',
                				ngSelectedCallback: '&'
                				},
                controller  : function ($scope, $element) {
                	var inputEle = $element.find('input[type="text"]');
                	var btnEle = $element.find('.input-group-btn');
                    var delayTime = 200;
                    var open = function() {
                        if ($scope.ngModel) {
                            $timeout(
                                    function () {
                                    	btnEle.addClass('open');
                                    },
                                    delayTime
                                );
                        }
                    };
                    var close = function() {
                    	btnEle.removeClass('open');
                    };
                    var initFlag = true;
                    $scope.$watch('ngModel', function(newVal, oldVal) {
                    	if (!initFlag) {
                    		var isOpen = btnEle.attr('class').indexOf('open');
                    		var filterList = $filter('filter')($scope.ngSelectedItems, {'name': newVal});
                    		if (isOpen < 0 && filterList && filterList.length) {
                    			open();
                    		} else if (!newVal || filterList && filterList.length < 1){
                    			close();
                    		}
                    	} else {
                    		initFlag = false;
                    	}
                    });
                    var doCallback = function(){
                		$scope.ngSelectedCallback();
                    }
                    inputEle.bind('change', function(){
                		doCallback();
                	});
                    $scope.setItem = function(item) {
                        $scope.ngModel = item.name;
                        $timeout(
                                function () {
                            		doCallback();
                                },
                                5
                            );
                    };
                },
                templateUrl : 'scripts/directives/template/vtFilterSelect.tmpl.html',
                link        : function (scope, element, attrs, ngModel) {
                }
            };
        }
    );
}());