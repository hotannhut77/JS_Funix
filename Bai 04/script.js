// "use strict";

// let count = 0;
// cout = 10;
// count++;
// console.log(count);

// II. Hàm
// 1. Giới thiệu về hàm

/*
const birthYear1 = 2000;
const birthYear2 = 2005;
const birthYear3 = 1998;
const birthYear4 = 2008;

const age1 = 2022 - birthYear1;
if (age1 >= 18) {
  console.log(`Bạn đã ${age1} tuổi , và bạn đã đủ 18 tuổi trở lên !`);
} else {
  console.log(`Bạn đã ${age1} tuổi , và bạn chưa đủ 18 tuổi nhé !`);
}

const age2 = 2022 - birthYear2;
if (age2 >= 18) {
  console.log(`Bạn đã ${age2} tuổi , và bạn đã đủ 18 tuổi trở lên !`);
} else {
  console.log(`Bạn đã ${age2} tuổi , và bạn chưa đủ 18 tuổi nhé !`);
}

const age3 = 2022 - birthYear3;
if (age3 >= 18) {
  console.log(`Bạn đã ${age3} tuổi , và bạn đã đủ 18 tuổi trở lên !`);
} else {
  console.log(`Bạn đã ${age3} tuổi , và bạn chưa đủ 18 tuổi nhé !`);
}

const age4 = 2022 - birthYear4;
if (age4 >= 18) {
  console.log(`Bạn đã ${age4} tuổi , và bạn đã đủ 18 tuổi trở lên !`);
} else {
  console.log(`Bạn đã ${age4} tuổi , và bạn chưa đủ 18 tuổi nhé !`);
}

// // khai báo hàm
// function showAge(birthYear) {
//   const age = 2022 - birthYear;
//   if (age >= 18) {
//     console.log(`Bạn đã ${age} tuổi , và bạn đã đủ 18 tuổi trở lên !`);
//   } else {
//     console.log(`Bạn đã ${age} tuổi , và bạn chưa đủ 18 tuổi nhé !`);
//   }
// }

// // gọi hàm
// showAge(birthYear1);
// showAge(birthYear2);
// showAge(birthYear3);
// showAge(birthYear4);
*/

// 2. Khai báo hàm

/*
// không có tham số
function loiChao() {
  console.log("Xin chào các bạn, mình là HTN !");
}

// gọi hàm
loiChao();

// có tham số
function getSum(a, b) {
  console.log(`Tổng của 2 số ${a} và ${b} là : ${a + b}`);
}

// gọi hàm
getSum(99, 100);
*/

// tham số , đối số
/*
function getSum(a, b) {
  console.log(`Tổng của 2 số ${a} và ${b} là : ${a + b}`);
}

const num1 = 20;
const num2 = 30;

getSum(num1, num2);
console.log(a, b); // báo lỗi tại dòng này
// vì lúc này a, b là các biến chỉ được nhìn thấy, 
// và sử dụng được bên trong hàm getSum mà thôi
*/

// return và không return
/*
const birthYear = 2000;

function getAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

const age = getAge(birthYear);
console.log("số tuổi là : " + age);
*/

// Biểu thức hàm

// const showInfo = (fullName, age) =>
//   console.log(`Tôi tên là ${fullName}, năm nay tôi ${age} tuổi !`);

// showInfo("Nguyễn Tiến Linh", 25);

// Hàm trong hàm

// const luyThua2 = (a) => a ** 2;
// const display = function (num) {
//   const res = luyThua2(num);
//   console.log(res);
// };

// display(10);

// ############################ //

// III. Array

// giới thiệu về array

const numbers = [20, 30, 40, 50, 60];
console.log(numbers);
console.log(numbers[0]);

const lengthArr = numbers.length;
console.log(lengthArr);

const myArray = ["Hello", 10, 20, "JS", 12.34];
console.log(myArray);
console.log(myArray.length);

// tiến hành thêm 2 phần tử mới vào
// cuối mảng và trả về độ dài mới của mảng
let newLength = myArray.push("ok", 100);
console.log(myArray);
console.log(newLength);

console.log(myArray.pop());
console.log(myArray);

console.log(myArray.splice(0, 1, "HTNNN"));
console.log(myArray);
