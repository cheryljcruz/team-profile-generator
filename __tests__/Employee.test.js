const Employee = require('../lib/Employee.js');

// creates employee object
test('creates an employee object', () => {
    const employee = new Employee('Bob', 7080997, 'bobthebuilder@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// employee name
test('gets employee name', () => {
    const employee = new Employee('Bob', 7080997, 'bobthebuilder@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// employee ID
test('gets employee ID', () => {
    const employee = new Employee('Bob', 7080997, 'bobthebuilder@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// employee email 
test('gets employee email', () => {
    const employee = new Employee('Bob', 7080997, 'bobthebuilder@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// employee role
test('gets role of employee', () => {
    const employee = new Employee('Bob', 7080997, 'bobthebuilder@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});