// Filter duplicate values from array

var num = [1, 2, 3, 4, 1, 1, 5, 6, 2, 7, 8, 4];

function filterDuplicateValues() {
  const uniqueValues = [];
  return num.filter((e, i, a) => {
    if (uniqueValues.indexOf(e) >= 0) {
      return false;
    } else {
      uniqueValues.push(e);
      return true;
    }
  });
}

filterDuplicateValues();

// Filter duplicate objects from array

var employees = [
  { name: 'A', age: 23 },
  { name: 'A', age: 20 },
  { name: 'B', age: 23 },
  { name: 'C', age: 23 },
  { name: 'D', age: 20 },
  { name: 'C', age: 19 }
];

function filterDuplicateObjects(data) {
  const employeeNames = [];
  const filteredEmployees = [];
  data.forEach(employee => {
    if (employeeNames.indexOf(employee.name.toLowerCase()) === -1) {
      employeeNames.push(employee.name.toLowerCase());
      filteredEmployees.push(employee);
    }
  });
  return filteredEmployees;
}

filterDuplicateObjects(employees);
