angular.module('starter.directives', [])

.directive('stopEvent', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind('click', function (e) {
                alert("role");
                e.preventDefault(); // added for ionic
                e.stopPropagation();
            });
        }
    };
});
