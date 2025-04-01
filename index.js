// Write your solution in this file!
// Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // 1. updateEmployeeWithKeyAndValue - returns a new object with updated key-value
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};  // Use the spread operator to create a new object with the updated key-value pair
  }
  
  // 2. destructivelyUpdateEmployeeWithKeyAndValue - directly modifies the employee object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;  // Directly modify the employee object
    return employee;
  }
  
  // 3. deleteFromEmployeeByKey - returns a new object without the key-value pair
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};  
    delete newEmployee[key];  // Delete the key from the copied object
    return newEmployee;
  }
  
  // 4. destructivelyDeleteFromEmployeeByKey - directly modifies the employee object by deleting the key
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];  // Directly delete the key from the employee object
    return employee;
  }
  
  // Example usage:
  console.log(updateEmployeeWithKeyAndValue(employee, "email", "john.doe@example.com"));
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak St"));
  console.log(deleteFromEmployeeByKey(employee, "name"));
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));
  