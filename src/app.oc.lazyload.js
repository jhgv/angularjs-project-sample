(function(){
    "use strict";

    angular.module('mysite').config(['$ocLazyLoadProvider',
        function ($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                modules: [
                    {
                        name: 'Article',
                        files: [
                            'src/article/ArticlesController.js',
                            'src/article/components/article-list/ArticleListController.js',
                            'src/article/components/article-form/ArticleForm.js'
                        ],
                    },
                    {
                        name: 'Home',
                        files: [
                            'src/home/HomeController.js'
                        ],
                    }
                ],
            });
        }
    ]);

})();