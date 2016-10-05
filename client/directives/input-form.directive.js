(function() {
    'use strict';

    angular
        .module('input-form', [])
        .directive('inputForm', inputForm);
    
    function inputForm() {
        return {
            restrict: 'E',
            templateUrl: 'input-form.html'
        };
    }
    
})();