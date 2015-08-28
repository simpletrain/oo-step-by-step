'use strict';

var Person = require('./person.js');

function Student(name ,age, klass) {
    Person.call(this, name, age);
    this.klass =  klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function(){
    return ('I an a Student,I am at Class ' + this.klass);
};


module.exports = Student;