const Manager = require('../lib/Manager')

test('creates a team manager object', () => {
    const manager = new Manager('Barry', 100122, 'randomEmail@gmail.com', 107);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})