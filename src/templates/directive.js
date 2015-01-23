{% extends 'iife.js' %}
{% block body %}
    /**
    * @description
    *
    * @example
    * <your-directive></your-directive>
    *
    *
    * @author
    */
    angular
        .module('{{module}}', [])
        .directive('{{name}}', {{name}}DirectiveDef);


    {{name}}DirectiveDef.$inject = [];


    function {{name}}DirectiveDef() {
        var directive = {
            restrict: 'E',
            link: link,
            templateUrl: '...',
            controller: '{{name}}Controller',
            controllerAs: 'vm',
            scope: {

            }
        };

        return directive;

        function link(scope, element, attrs) {

        }
    }
{% endblock %}
