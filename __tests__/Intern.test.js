const Intern = require('../lib/Intern.js');

// intern object
test('creates an Intern object', () => {
    const intern = new Intern('Bob', 7080997, 'bobthebuilder@gmail.com', 'UTSA');

    expect(intern.school).toEqual(expect.any(String));
});

// gets school
test('gets employee school', () => {
    const intern = new Intern('Bob', 7080997, 'bobthebuilder@gmail.com', 'UTSA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role
test('gets role of employee', () => {
    const intern = new Intern('Bob', 7080997, 'bobthebuilder@gmail.com', 'UTSA');

    expect(intern.getRole()).toEqual('Intern');
});