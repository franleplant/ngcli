{% extends 'iife.js' %}

{% block body %}

    angular.module('{{ moduleName  }}', [])
        .factory('{{ factoryName  }}', factory);


    factory.$inject = [];

    function factory() {


    }

{% endblock %}
