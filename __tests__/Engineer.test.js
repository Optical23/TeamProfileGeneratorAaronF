const Engineer = require('../lib/Engineer');

//runs get github
test('get engineer github', () => {
    const engineer = new Engineer('aaron', 123, 'aaron@email.com', 'githubtest');
    expect(engineer.getGithub()).toEqual(expect.any(String));
})