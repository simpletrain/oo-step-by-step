var Student = require('./student.js');

function Klass(number){
    this.number = number;
}

Klass.prototype.assignLeader = function(student){
    this.leader = student;
};

module.exports = Klass;