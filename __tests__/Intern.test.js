const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Barry', 100122, 'randomUser@github.com', 'School of Hard Socks');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});