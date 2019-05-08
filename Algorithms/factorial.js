function factorial(num) {
  if (x === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
factorial(10);

var array2 = [
  { name: 'A', age: 23 },
  { name: 'B', age: 23 },
  { name: 'C', age: 23 },
  { name: 'A', age: 23 }
];
var filteredDecords = [];
var newArray = [];
array2.forEach((e, i) => {
  if (!newArray.indexOf(e.name)) {
    newArray.push(e.name);
  }
});
console.log(newArray);
