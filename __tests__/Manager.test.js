const Manager = require('../lib/Manager');

//runs get officeNumber
test('get office number', () => {
    const manager = new Manager('aaron', 123, 'aaron@email.com', 1233);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})