(function(){
    "use strict";
    
    angular.module("mysite").controller('ArticlesController', ArticlesController);

    ArticlesController.$inject = [];

    function ArticlesController() {
    
        this.$onInit = function () {
            console.log("Articles controller");
        }

    }

})();