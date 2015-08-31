'use strict';

var Person = require('../src/person.js');
var Student = require('../src/student.js');
var Klass = require('../src/klass.js');

describe('Student', function () {

    it('should has a super class called Person', function () {
        var student = new Student(9527, 'Tom', 21);
        expect(student instanceof Person).toBe(true);
    });

    it('should has name,age properties', function () {
        var klass = new Klass(2);
        var student = new Student(9527, 'Tom', 21 ,klass);
        expect(student.id).toBe(9527);
        expect(student.name).toBe('Tom');
        expect(student.age).toBe(21);
        expect(student.klass.number).toBe(2);
    });

    describe('#introduce', function () {

        it('should print right introduce when it is not leader', function () {
            var klass = new Klass(2);
            var student = new Student(9527, 'Tom', 21, klass);
            var introduce = student.introduce();
            expect(introduce).toBe('My name is Tom. I am 21 years old.I am a Student.I am at Class 2.');
        });

        it('should print right introduce when it is leader', function () {
            var klass = new Klass(2);
            var student = new Student(9527, 'Tom', 21, klass);
            klass.appendMember(student);
            klass.assignLeader(student);
            var introduce = student.introduce();
            expect(introduce).toBe('My name is Tom. I am 21 years old.I am a Student.I am Leader of Class 2.');
        });
    });

});
