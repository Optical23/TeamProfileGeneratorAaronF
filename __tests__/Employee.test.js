const Employee = require('../lib/Employee');

//runs create employee object 
test('creates employee', () => {
    const employee = new Employee('aaron', 123, 'aaron@email.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//runs getName() in the employee object
test('get employee name', () => {
    const employee = new Employee('aaron', 123, 'aaron@email.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

//runs getId() in the employee object
test('get employee ID', () => {
    const employee = new Employee('aaron', 123, 'aaron@email.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

//runs getEmail()in the employee object
test('get employee email', () => {
    const employee = new Employee('aaron', 123, 'aaron@email.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//runs getRole in the employee object
test('get role of employee', () => {
    const employee = new Employee('aaron', 123, 'aaron@email.com');
    expect(employee.getRole()).toEqual('Employee');
}); 