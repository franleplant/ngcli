{% extends 'iife.js' %}
{% block body %}
    angular.module('{{ module }}', [])
        .filter('{{ name }}', {{ name }}FilterDef);


    {{ name }}FilterDef.$inject = [];

    /**
     * @name
     * @description
     *
     * @param
     * @param
     *
     * @returns
     *
     */
    function {{ name }}FilterDef() {

        return function {{name}}Filter(input, param1, param2, param3) {
            return something;
        }
    }
{% endblock %}
