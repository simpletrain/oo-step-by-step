'use strict';

var Person = require('./person.js');

function Teacher(name ,age, klass) {
    Person.call(this, name, age);
    this.klass = klass;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.super_introduce = Person.prototype.introduce;

Teacher.prototype.introduce = function(){
    if(this.klass){
        return (this.super_introduce() +  'I am a Teacher. I teach Class '+ this.klass +'.');
    } else {
        return (this.super_introduce() +  'I am a Teacher.I teach No Class.');
    }
};

Teacher.prototype.introduceWith = function(student){
    if(student.klass.number === this.klass.number){
        return (this.super_introduce() +  'I am a Teacher. I teach ' + student.name);
    } else {
        return (this.super_introduce() +  "I am a Teacher.I don't teach " + student.name);
    }
};


module.exports = Teacher;