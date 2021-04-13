"use strict";

const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

new Person("Jonas", 1991);

//
Person.prototype.calcAge = function () {
	console.log(2037 - this.birthYear);
};
