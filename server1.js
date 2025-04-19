const notes = require('./Notes.js');
var _ = require('lodash')


var age = notes.age;
console.log(age)

var sum = notes.addNumber(18,10)
console.log(sum);


var data = ["person" ,"person",1,2,1,2,'name','age'];
var filter = _.uniq(data);
console.log(filter);