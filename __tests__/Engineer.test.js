const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Barry', 100122, 'randomUser@github.com', 'https://github.com/barry-manilow');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})