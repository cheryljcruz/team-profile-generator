const Engineer = require('../lib/Engineer.js');

// engineer object
test('creates an engineer object', () => {
    const engineer = new Engineer('Bob', 7080997, 'bobthebuilder@gmail.com', 'bobswoke1');
    
    expect(engineer.github).toEqual(expect.any(String));
});