describe('{{ module}}.{{ name }} module', function() {
    'use strict';

    var ctrl;

    // Include the main module
    beforeEach(module('{{module}}'));


    //Mock dependencies
    beforeEach(module(function($provide) {

        var serviceMock = jasmine.createSpy('serviceMock')
                            .and.returnValue(...);

        $provide.value('service', serviceMock);

    }));

    // Get a reference of the service to test
    beforeEach(inject(function($injector) {
        var serviceMock = jasmine.createSpy('serviceMock')
                            .and.returnValue(...);

        ctrl = $injector
                .get('$controller')('{{ name }}Controller', {
                    //Mock any Controller dependencies
                });
    }));

    it('should initialize correctly', function() {
         expect(ctrl.attr).toBe(...);
    });

    it('should ....', function() {
        var result = ctrl.method();

        expect(result).toBe(...);
        expect(result).toEqual(...);
    });


    describe('alternative flows', function() {

        it('should ...', function() {
            var result = ctrl.methodB();

            expect(result).toBe(...);
            expect(result).toEqual(...);
        });

    });

});
