// Write your solution in this file!
const employee = {

};
function  updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function deleteFromEmployeeByKey(employee, key) {
    const deletedEmployee = {...employee};
    delete deletedEmployee [key];
    return deletedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

