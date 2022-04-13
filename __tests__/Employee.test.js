const { test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

// creates employee object
test('creates an employee object', () => {
    const employee = new Employee('Bob', 7080997, 'bobthebuilder@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

