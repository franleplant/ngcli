{% extends 'iife.js' %}

{% block body %}
    angular.module('{{ module }}', [])
        .service('{{ name }}', {{ name }}Service);


    {{ name }}Service.$inject = [];

    function {{ name }}Service() {


    }
{% endblock %}
