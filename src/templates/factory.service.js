{% extends 'iife.js' %}

{% block body %}
    angular.module('{{ module }}', [])
        .factory('{{ name }}', {{ name }}Factory);


    {{ name }}Factory.$inject = [];

    function {{ name }}Factory() {


    }
{% endblock %}
