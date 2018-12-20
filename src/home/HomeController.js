(function () {
    "use strict";

    angular.module("mysite").controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        
        this.$onInit = function() {
            
        }
    }

})();