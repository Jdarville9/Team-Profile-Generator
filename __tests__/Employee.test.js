const Employee = require('../lib/Employee')

test('create an employee object', () => {
    const employee = new Employee('Barry', '11002', 'randomemail@gmail.com');

    expect(employee.name).toBe('Barry');
    expect(employee.id).toBe('11002');
    expect(employee.email).toBe('randomemail@gmail.com')
})