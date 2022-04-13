const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

// manager object
test('creates a Manager object', () => {
    const manager = new Manager('Bob', 7080997, 'bobthebuilder@gmail.com', 201);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role
test('gets employee role', () => {
    const manager = new Manager('Bob', 7080997, 'bobthebuilder@gmail.com', '201');

    expect(manager.getRole()).toEqual('Manager');
});