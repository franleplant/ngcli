{% extends 'iife.js' %}

{% block body %}
    angular.module('{{ module }}', [])
        .controller('{{ name }}Controller', {{ name }}Controller);


    {{ name }}Controller.$inject = [];

    function {{ name }}Controller(dep1) {
        var vm = this;

        vm.attr = dep1;
        vm.method = method;

        activate()

        function activate() {
            //init logic goes here
        }

        function method() {

        }
    }
{% endblock %}
