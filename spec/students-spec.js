'use strict';

var Person = require('../src/person.js');
var Student = require('../src/student.js');

describe('Student', function () {

    it('should has a super class called Person', function () {
        var student = new Student('Tom', 21);
        expect(student instanceof Person).toBe(true);
    });

    it('should has name,age properties', function () {
        var student = new Student('Tom', 21 ,2);
        expect(student.name).toBe('Tom');
        expect(student.age).toBe(21);
        expect(student.klass.number).toBe(2);
    });

    describe('#introduce', function () {

        it('should print right introduce', function () {
            var student = new Student('Tom', 21, 2);
            var introduce = student.introduce();
            expect(introduce).toBe('My name is Tom. I am 21 years old.I am a Student. I am at Class 2.');
        });

    });

});
