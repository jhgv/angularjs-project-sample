(function(){
    "use strict";

    angular.module('mysite').controller('ArticleListController', ArticleListController);

    ArticleListController.$inject = [];

    function ArticleListController() {
        console.log("hello controller");
    }

})