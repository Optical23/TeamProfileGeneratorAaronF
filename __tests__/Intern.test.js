const Intern = require('../lib/Intern');

//runs getSchool
test('get intern School', () => {
    const intern = new Intern('aaron', 123, 'aaron@email.com', 'smu');
    expect(intern.getSchool()).toEqual(expect.any(String));
})