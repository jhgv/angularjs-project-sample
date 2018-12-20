(function(){
    "use strict";

    angular.module('mysite').controller('ListArticleController', ListArticleController);

    ListArticleController.$inject = [];

    function ListArticleController() {
        console.log("hello controller");
    }

})