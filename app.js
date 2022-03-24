// let x = 1;
// let y = 2;

// if (x > y) {
//   console.log(`X is larger than Y. The value of X is: ${x}.`);
// } else if (y > x) {
//   console.log(`Y is larger than X. The value of Y is: ${y}.`);
// } else {
//   console.log(`The values are identical`);
// }

function maxOfTwo(x, y) {
  if (x > y) {
    console.log(`X is larger than Y. The value of X is: ${x}.`);
  } else if (y > x) {
    console.log(`Y is larger than X. The value of Y is: ${y}.`);
  } else {
    console.log(`The values are identical.`);
  }
}

maxOfTwo(5, 17);
maxOfTwo(25, 16);
maxOfTwo(103, 11);
maxOfTwo(5, "5");
