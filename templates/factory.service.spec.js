describe('{{ moduleName}} module', function() {
    'use strict';


    var {{ factoryName }};

    // Include the main module
    beforeEach(module('{{moduleName}}'));


    //Mock dependencies
    beforeEach(module(function($provide) {

        var serviceMock = jasmine.createSpy('serviceMock')
                            .and.returnValue(...);

        $provide.value('service', serviceMock);

    }));

    // Get a reference of the service to test
    beforeEach(inject(function($injector) {

        {{ factoryName }} = $injector.get('{{ factoryName }}');
    });


    it('should ....', function() {
        var result = {{ factoryName }}();

        expect(result).toBe(...);
        expect(result).toEqual(...);
    });


    describe('alternative flows', function() {

        it('should ...', function() {
            var result = {{ factoryName }}();

            expect(result).toBe(...);
            expect(result).toEqual(...);
        });

    });

});
