// Controller for wordlist search
(function() {
    "use strict";
    
    angular
        .module("search", [])
        .controller("SearchController", SearchController);
    
    // Escapes any special characters in string passed in by inputForm
    function EscapeRegEx(string) {
        if(string){
            return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        }
    }
    
    // Defines SearchController
    function SearchController($scope, $http) {
        var vm = this;
        
        $scope.search = "";

        // Watches for input in the search bar
        $scope.$watch("search", function(value) {
            var req = {
                payload: EscapeRegEx(value)
            };
            
            vm.getWords(req);
        });
        
        // Requests the wordlist array from the server
        vm.getWords = function(req) {
            $http.post("/search", req)
                .then(function(response) {
                    vm.words = response.data;
                },
                function(response) {
                    console.log(response.data);
                });
        };
    }
})();
