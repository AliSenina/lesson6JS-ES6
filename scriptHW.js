// Task 1

// let arr = [5, 6, 7, 8, 9];
// let sum = 0;

// arr.forEach(function (number) {
//     sum += number;
// });

// console.log(sum);

// Task 2

// let arr = [5, 6, 7, 8, 9];
// const newArray = arr.map(item => item*item
    
// )
// console.log(newArray)

// Task 3
// let arr = [
//     { name: 'Ivan', country: 'Ukraine' },
//     { name: 'Petro', country: 'Ukraine' },
//     { name: 'Miguel', country: 'Cuba' }
// ];

// let allFromUkraine = arr.every(function (obj) {
//     return obj.country === 'Ukraine';
// });

// console.log(allFromUkraine);

// Task 4

// let arr = [
//     { name: 'Ivan', country: 'Ukraine' },
//     { name: 'Petro', country: 'Ukraine' },
//     { name: 'Miguel', country: 'Cuba' }
// ];

// let hasCuba = arr.some(function (obj) {
//     return obj.country === 'Cuba';
// });

// console.log(hasCuba);

// Task 5

// let arr = [1, 'string', [3, 4], 5, [6, 7]];

// let subArrays = arr.filter(item => Array.isArray(item));

// console.log(subArrays);

// Task 6

// let arr = [1, 2, 5, 0, 4, 5, 6];
// let sum = arr.reduce((acc, val) => {
//     if (val === 0) {
//         acc.stop = true;
//         return acc;
//     }
//     if (!acc.stop) {
//         acc.total += val;
//     }
//     return acc;
//     }, { total: 0, stop: false });

// console.log(sum.total);

// Task 6.2

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let sum = 0;
// let index = arr.findIndex((num) => {
//     sum += num;
//     return sum > 10;
// });

// console.log(index);

// Task 7

// let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// let result = arr.filter(num => num > 0).map(num => Math.sqrt(num));
// console.log(result);





