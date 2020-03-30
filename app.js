var _ = require('lodash');

var myArray = ['Anish', 'Yamuna', 'Ananthan', 123, 12, 12, 12, 123, 'Yamuna'];


var filterArray = _.uniq(myArray);

console.log(filterArray);