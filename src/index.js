var starwarsNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');
var getRandomItem = uniqueRandomArray(starwarsNames);
module.exports = {

all : starwarsNames,
random : random

};


function random(number) {
    if (number === undefined)
    {
        return getRandomItem();
    } else
    {
      var randomItems = [];
      for (var i = 0; i < number; i++) {
          randomItems.push(getRandomItem());
      };
      return randomItems;

    }
}
