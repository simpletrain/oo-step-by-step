'use strict';

var Person = require('./person.js');
var Klass = require('./klass.js');

function Student(name ,age, klass) {
    Person.call(this, name, age);
    this.klass = new Klass(klass);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.super_introduce = Person.prototype.introduce;

Student.prototype.introduce = function(){
    return (this.super_introduce() + 'I am a Student. I am at Class '+ this.klass.number +'.');
};


module.exports = Student;