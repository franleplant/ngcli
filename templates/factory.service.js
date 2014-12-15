{% extends 'iife.js' %}

{% block body %}
    angular.module('{{ moduleName  }}', [])
        .factory('{{ factoryName  }}', {{ factoryName }}Factory);


    factory.$inject = [];

    function {{ factoryName }}Factory() {


    }
{% endblock %}
