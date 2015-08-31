'use strict';

var Person = require('../src/person.js');
var Worker = require('../src/worker.js');

describe('Worker', function () {

    it('should has a super class called Person', function () {
        var worker = new Worker(9527, 'Tom', 21);
        expect(worker instanceof Person).toBe(true);
    });

    it('should has name,age properties', function () {
        var worker = new Worker(9527, 'Tom', 21);
        expect(worker.id).toBe(9527);
        expect(worker.name).toBe('Tom');
        expect(worker.age).toBe(21);
    });

    describe('#introduce', function () {

        it('should print right introduce', function () {
            var worker = new Worker(9527, 'Tom', 21);
            var introduce = worker.introduce();
            expect(introduce).toBe('My name is Tom. I am 21 years old.I am a Worker. I have a job.');
        });

    });

});
