'use strict';

var Klass = require('../src/klass.js');
var Student = require('../src/student.js');

describe('Klass', function () {

    it('should has number,age properties', function () {
        var klass = new Klass(2);
        expect(klass.number).toBe(2);
    });

    describe('#appendMember', function () {

        it('can append a member in klass', function () {
            var klass = new Klass(2);
            var student = new Student(9527, 'Tom', 21 ,klass);
            klass.appendMember(student);
            expect(klass.member.indexOf(student.id)).not.toBe(-1);
        });

    });

    describe('#assignLeader', function () {

        it('can assign a leader in klass when student has been appended', function () {
            var klass = new Klass(2);
            var student = new Student(9527, 'Tom', 21 ,klass);
            klass.appendMember(student);
            klass.assignLeader(student);
            expect(student.klass.leader).toEqual(student);
        });

        it('can console "It is not one of us." when student has not been appended yet', function () {
            spyOn(console, 'log');
            var klass = new Klass(2);
            var student = new Student(9527, 'Tom', 21 ,klass);
            klass.assignLeader(student);
            expect(console.log).toHaveBeenCalledWith('It is not one of us.');
        });

    });

});
