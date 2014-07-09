/* global describe, it */
//here is where we'll write the tests

(function () {
    'use strict';
var favoritePlaces = [{ city: 'New York', USA: true,},
					{ city: 'Paris',
					  USA: false,
					},
					{ city: 'San Franscisco',
					  USA: true,
					},
					{ city: 'Burlington VT',
					  USA: true,
					},
					];

    describe('_.pluck', function () {
        describe('How underscore _.pluck works', function () {

            it('should throw an error when an incorrect argument is passed', function (){
            	/*_.pluck = function(array) {
							if (!Array.isArray(array) 
				throw new Error('incorect argument');
            	expect(_.pluck()).to.throw(Error); 
            	)};*/
            	
            });  

            it('should throw an error when no argument is passed', function () {
            	_.pluck = function(argument) {
							if (!argument) 
				throw new Error('missing argument');
            	expect(_.pluck()).to.throw(Error); 
            	}
            });

             it('should return the expected value', function () {

            	expect(_.pluck(favoritePlaces, 'city')).to.deep.equal(['New York', 'Paris', 'San Franscisco', 'Burlington VT']); 
            });
        });
    });
})();

(function () {
    'use strict';

    describe('_.first', function () {
        describe('How underscore\'s _.first method works.', function () {
            it('should return the first element of an array ', function () {
            	var kittens = ['Lucia', 'Cosmo', 'Lola', 'Magellan', 'Roo']
            	expect(_.first(kittens)).to.equal('Lucia');
            });
            it('should throw an error when it is not an array', function () {
        		var number = !Array;
        		expect(_.first(number)).to.equal(undefined);
        		if (!Array.isArray(number)){
        			throw new Error('Not an array');
        		}
        		expect(_.first(number)).to.throw(Error);
      		});
    	});
    });
})();

(function () {
    'use strict';

    describe('_.last', function () {
        describe('How underscore\'s _.last method works.', function () {
            it('should return the last element of an array', function () {
            	var kittens = ['Lucia', 'Cosmo', 'Lola', 'Magellan', 'Roo']
            	expect(_.last(kittens)).to.equal('Roo');
            });
        });
    });
})();