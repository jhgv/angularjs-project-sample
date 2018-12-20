(function(){
    "use strict";
    
    angular.module("mysite").controller('ArticlesController', ArticlesController);

    ArticlesController.$inject = ['$scope'];

    function ArticlesController($scope) {

        $scope.newArticle = {};
    
        this.$onInit = function () {
            $scope.articles = [
                {
                    title: "Hello world",
                    text: "This is a hello world example"
                },
                {
                    title: "Components",
                    text: "Creating components"
                }
            ];
        }

        $scope.createArticle = function(article) {
            $scope.articles.push(article);
        }

    }

})();