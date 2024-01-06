// Write your solution in this file!
const employee = {
    name: "John",
    address: {
      street: "123 Main St",}
  };
  function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    const newEmployee = {...employeeObject};
    newEmployee[key] = value;
    return newEmployee;
  };
  function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value;
    return employeeObject;
  };
  function deleteFromEmployeeByKey(employeeObject, key) {
    const newEmployee = {...employeeObject};
    delete newEmployee[key];
    return newEmployee;
  };
  function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key];
    return employeeObject;
  };
