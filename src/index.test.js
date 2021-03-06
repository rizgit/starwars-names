var starWars = require('./index');
var expect = require('chai').expect;

describe('starwars-names', function(){
describe('all', function () {
	
    it('should do what..', function () {
    	
    
	expect(starWars.all).to.satisfy(isArrayOfStrings);

	function isArrayOfStrings(array) {
		return array.every(function(item){
			return typeof item === 'string';
		});
		// body...
	};
	});

	it('should contain `Rizwa1`', function () {
		expect(starWars.all).to.include('Rizwan');

	});
});

describe('random', function () {
	it('test random', function () {
		var randomItem = starWars.random();
		expect(starWars.all).to.include(randomItem);
	});


it('should return an array of items when passed a number...', function () {
    var randomItems = starWars.random(5);
expect(randomItems).to.have.length(5);
randomItems.forEach(function(item) {
    expect(starWars.all).to.include(item);
    
});
});
});
});
