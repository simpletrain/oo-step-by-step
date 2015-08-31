'use strict';

var Person = require('./person.js');

function Worker(id, name ,age) {
    Person.call(this, id, name, age);
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.super_introduce = Person.prototype.introduce;

Worker.prototype.introduce = function(){
    return (this.super_introduce() + 'I am a Worker. I have a job.');
};


module.exports = Worker;