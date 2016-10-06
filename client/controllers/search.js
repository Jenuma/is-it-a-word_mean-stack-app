(function(){
    "use strict";
    
    angular
        .module("search", [])
        .controller("SearchController", SearchController);
    
    // Escapes any special characters in string passed in by inputForm
    function EscapeRegEx(string){
        if(string){
            return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        }
    }
    
    function SearchController($scope, $http) {
        
        var vm = this;
        var regex;
        
        $scope.search = "";
       /* vm.words = [
            "apple",
            "ajax",
            "alamo",
            "banana",
            "corn",
            "carry-weight",
            "dinosaur",
            "delicious",
            "eggbert",
            "elephant",
            "funk",
            "fresh",
            "funcky-fresh",
            "gouda",
            "gorgonzola",
            "green",
            "holla",
            "hash",
            "ignorant",
            "ignious",
            "japan",
            "judo",
            "kangaroo",
            "karate",
            "lmao",
            "lecture",
            "lord",
            "mongoose",
            "node",
            "octagon",
            "orange",
            "polygonal",
            "penis",
            "quincy",
            "queen",
            "rush",
            "rough",
            "santuary",
            "sectaurs",
            "sizzle",
            "turmoil",
            "tuck",
            "uranus",
            "ukraine",
            "venosaur",
            "wednesday",
            "weekend",
            "xylophone",
            "xxyzz",
            "yandere",
            "yo-dawg",
            "zoobley-zoo"
        ]; */
        
        vm.getWords = function() {
            $http.get("/search")
                .then(function(response) {
                    vm.words = response.data;
                },
                function(response) {
                    console.log(response.data);
                });
        };

        
        
        $scope.$watch('search', function(value) {
            regex = new RegExp('\\b' + EscapeRegEx(value), 'i');
            console.log(regex);
        });
        
        vm.filterBySearch = function(word) {
            if(!$scope.search) {
                return true;
            }
           
            return regex.test(word);
        };
        vm.getWords();
    }

})();