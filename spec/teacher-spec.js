'use strict';

var Person = require('../src/person.js');
var Teacher = require('../src/teacher.js');
var Student = require('../src/student.js');

describe('Worker', function () {

    it('should has a super class called Person', function () {
        var teacher = new Teacher('Tom', 21);
        expect(teacher instanceof Person).toBe(true);
    });

    it('should has name,age properties', function () {
        var teacher = new Teacher('Tom', 21 ,2);
        expect(teacher.name).toBe('Tom');
        expect(teacher.age).toBe(21);
        expect(teacher.klass).toBe(2);
    });

    describe('#introduce', function () {

        it('should print "My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2." when there has klass', function () {
            var teacher = new Teacher('Tom', 21 ,2);
            var introduce = teacher.introduce();
            expect(introduce).toBe('My name is Tom. I am 21 years old.I am a Teacher. I teach Class 2.');
        });

        it('should print "My name is Tom. I am 21 years old. I am a Teacher.I teach No Class."when there is no klass', function () {
            var teacher = new Teacher('Tom', 21);
            var introduce = teacher.introduce();
            expect(introduce).toBe('My name is Tom. I am 21 years old.I am a Teacher.I teach No Class.');
        });

    });

    describe('#introduceWith', function () {

        it('should print "My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2." when there has klass', function () {
            var teacher = new Teacher('Tom', 21 ,2);
            var student = new Student('Jerry', 21 ,2);
            var introduce = teacher.introduceWith(student);
            expect(introduce).toBe('My name is Tom. I am 21 years old.I am a Teacher. I teach Jerry');
        });

        it('should print "My name is Tom. I am 21 years old. I am a Teacher.I teach No Class."when there is no klass', function () {
            var teacher = new Teacher('Tom', 21);
            var student = new Student('Jerry', 21 ,3);
            var introduce = teacher.introduceWith(student);
            expect(introduce).toBe("My name is Tom. I am 21 years old.I am a Teacher.I don't teach Jerry");
        });

    });

});
