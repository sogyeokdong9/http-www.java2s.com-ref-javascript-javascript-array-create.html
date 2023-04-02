// We can use the Array constructor to create an array:
console.log('⁃⁃⁃⁃⁃⁃⁃⁃⁃ The Array constructor can create an array. ⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃');
let colors = new Array();

console.log(colors, typeof colors);
console.log('\n');


// the following creates an array with an initial length value of 20:
console.log(`⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃ The Array 'length' property is 20. ⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃`);
let colors2 = new Array(20);

console.log(colors2, typeof colors2);
console.log('\n');


// The following creates an array with three string values:
console.log(`⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃ The Array constructor can be passed items. ⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃`);
let colors3 = new Array("red", "blue", "green");

console.log(colors3, typeof colors3);
console.log('\n');


// An array can be created with a single value by passing it into the constructor.
// A single number argument creates an array with the given number of items.
// An argument of any other type creates a one-item array for the specified value.
console.log(`⁃ A single number argument sets the array's 'length' property. ⁃`);
let colors4 = new Array(3);
let names4 = new Array("Javascript");

console.log(colors4, typeof colors4);
console.log(names4, typeof names4);
console.log('\n');


// We can omit the new operator when using the Array constructor.
console.log('⁃⁃⁃ Omit the new operator when using the Array constructor. ⁃⁃⁃');
let colors5 = Array(3);
let names5 = Array("Javascript");

console.log(colors5, typeof colors5);
console.log(names5, typeof names5);
console.log('\n');


// The second way to create an array is by using an array literal notation.
console.log('⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃ Array literal notation. ⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃⁃');
let colors6 = ["red", "blue", "green"];
let names6 = [];
let values6 = [1, 2,];

console.log(colors6, typeof colors6);
console.log(names6, typeof names6);
console.log(values6, typeof values6);
