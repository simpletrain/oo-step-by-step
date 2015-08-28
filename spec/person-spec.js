'use strict';

var Person = require('../src/person.js');

describe('Person', function () {

    it('should has name,age properties', function () {
        var person = new Person('Tom', 21);
        expect(person.name).toBe('Tom');
        expect(person.age).toBe(21);
    });

    describe('#introduce', function () {

        it('should print right introduce', function () {
            var person = new Person('Tom', 21);
            var introduce = person.introduce();
            expect(introduce).toBe('My name is Tom. I am 21 years old.');
        });

    });

});
