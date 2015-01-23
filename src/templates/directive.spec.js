describe('{{ module}}.{{ name }} directive', function() {
    'use strict';

    var $compile, $scope, element, isolateScope;

    // Include the main module
    beforeEach(module('{{module}}', 'templatesModule'));

    //Mock dependencies
    beforeEach(module(function($provide) {
        var serviceMock = jasmine.createSpy('serviceMock')
                            .and.returnValue(...);

        $provide.value('service', serviceMock);
    }));

    //Mock directive's controller
    beforeEach(module(function($controllerProvider) {

        $controllerProvider
            .register('{{name}}Controller', function() {
                this.timeZoneOffset = mockTimeZoneOffset;
                this.timeZone = mockTimeZone;
            });
    }));

    // Get useful references
    beforeEach(inject(function($injector) {
         $scope = $injector.get('$rootScope').$new();
         $compile = $injector.get('$compile');
    }));


    beforeEach(function() {
        element = $compile('<your-directive></your-directive>')($scope);
        $scope.$digest();
        isolateScope = element.isolateScope();
    });


    it('should ....', function() {
        expect(element).toBe(...);
        expect(element).toEqual(...);
    });


    describe('alternative flows', function() {

        it('should ...', function() {
            expect(element).toBe(...);
            expect(element).toEqual(...);
        });

    });

});
