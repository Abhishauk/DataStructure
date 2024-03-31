
// MAP

const numbers = [1, 2, 3, 4];
const result = numbers.map(i => i * i);
console.log(result);


// MAP & FILTER

const arr = [1, 2, 3, 4];
const res = arr.map(i => i%2);
console.log(res);


// FILTER


const Array = [1, 2, 3, 4];
const results = Array.filter(i => i%2);
console.log(results);


// REDUCE


const num = [1, 2, 3, 4];
const resu = num.reduce((ac , cur) => ac+cur)
console.log(resu);


// FOREACH

const Numbers = [1, 2, 3, 4, 5];
Numbers.forEach(i => {
  const res = i * i;
  console.log(res);
});


// Slice


const array = [2,5,9,6];
const resultss = array.slice(0,2)
console.log(resultss);


// splice

const ar = [2,5,9,6];
 ar.splice(1,1,3)
console.log(ar);