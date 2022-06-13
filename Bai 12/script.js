// ví dụ ta có 1 mảng các số nguyên sau

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //

// const res = arr.reduce((pre, cur) => [cur, ...pre], ["OK"]);
// // pre = [], chạy từ i = 0
// // i = 0 : pre = [cur, ...pre] = [1]
// // i = 1 : pre = [cur, ...pre] = [2,...[1]] = [2,1]
// // i = 2 : pre = [cur, ...pre] = [3,...[2,1]] = [3,2,1]

// const res2 = arr.reduce((pre, cur) => pre + cur * 2);
// // 1 + 2*2 = 5
// // 5 + 3*2

// console.log(res2);

// console.log(res);

// const res = arr.filter((item) => item % 2 == 0).reduce((pre, cur) => pre + cur);

// console.log(res);
// // 2 + 4 + 6 + 8 + 10

const res2 = arr
  .map((item) => item * item)
  .filter((item) => item % 2 == 1)
  .reduce((pre, cur) => pre + cur);

console.log(res2);

[];
