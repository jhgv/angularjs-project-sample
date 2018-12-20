(function(){
    "use strict";

    function ArticleFormController() {
        var ctrl = this;

        ctrl.article = {};
        
        ctrl.create = function() {
            ctrl.onCreate({ article: ctrl.article });
        }
    }

    angular.module("mysite").component("articleForm", {
        templateUrl: "src/article/components/article-form/article-form.html",
        controller: ArticleFormController,
        bindings : {
            onCreate: "&"
        }
    })

})();