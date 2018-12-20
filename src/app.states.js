(function(){
    "use strict";

    angular.module('mysite').config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider){

            $stateProvider
                .state("mysite", {
                    abstract: true,
                    url: ""
                })
                .state("mysite.home", {
                    url: "/",
                    templateUrl: "src/home/home.html",
                    controller: "HomeController",
                    resolve: {
                        deps: [ "$ocLazyLoad",
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    "Home",
                                    "src/common/components/header.js"
                                ]);
                            }
                        ]
                    },
                })
                .state("mysite.articles", {
                    url: "/articles",
                    templateUrl: "src/article/articles.html",
                    controller: "ArticlesController",
                    resolve: {
                        deps: ["$ocLazyLoad",
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    "Article",
                                ]);
                            }
                        ]
                    },
                });

            $urlRouterProvider.otherwise("/");
            
            
        }
    ]);
    
})();