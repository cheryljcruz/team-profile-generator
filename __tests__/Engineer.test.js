const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

// engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', 7080997, 'bobthebuilder@gmail.com', 'bobswoke1');
    
    expect(engineer.github).toEqual(expect.any(String));
});

// get github
test('gets engineer github value', () => {
    const engineer = new Engineer('Bob', 7080997, 'bobthebuilder@gmail.com', 'bobswoke1');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role
test('gets role of employee', () => {
    const engineer = new Engineer('Bob', 7080997, 'bobthebuilder@gmail.com', 'bobswoke1');

    expect(engineer.getRole()).toEqual('Engineer');
});
