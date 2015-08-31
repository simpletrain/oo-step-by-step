var Student = require('./student.js');

function Klass(number){
    this.number = number;
    this.member = [];
}

Klass.prototype.assignLeader = function(student){
    if(this.member.indexOf(student.id) !== -1) {
        this.leader = student;
    } else {
        console.log('It is not one of us.');
    }
};

Klass.prototype.appendMember = function(student){
    this.member.push(student.id);
};

module.exports = Klass;