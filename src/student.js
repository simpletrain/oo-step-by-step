'use strict';

var Person = require('./person.js');
var Klass = require('./klass.js');

function Student(id, name ,age, klass) {
    Person.call(this, id, name, age);
    this.klass = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.super_introduce = Person.prototype.introduce;

Student.prototype.introduce = function(){
    if(this.klass.leader == this){
        return (this.super_introduce() + 'I am a Student.I am Leader of Class '+ this.klass.number +'.');
    } else {
        return (this.super_introduce() + 'I am a Student.I am at Class ' + this.klass.number + '.');
    }
};


module.exports = Student;