 describe('{{module}}.{{name}} module', function() {
    'use strict';


    var {{ name }};

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
        {{ name }} = $injector.get('{{ name }}Filter');
    }));


    it('should ....', function() {
        expect({{name}}).toBe(...);
        expect({{name}}).toBe(...);
    });


    describe('alternative flows', function() {
        it('should ...', function() {
            expect({{name}}).toBe(...);
        });

    });

});
