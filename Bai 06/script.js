"use strict";

// viết 1 hàm tính tổng của 2 số nhập từ người dùng

const getSum = function () {
  let num1 = prompt("Nhập số thứ nhất");
  let num2 = prompt("Nhập số thứ 2");

  const tong = num1 + num2;

  console.log(`Tổng của 2 số ${num1} và ${num2} là : ${tong}`);
};

getSum();

// // Một cách viết tối ưu hơn , để fix các lỗi

// const getSum = function () {
//   let num1 = Number(prompt("Nhập số thứ nhất"));
//   while (isNaN(num1)) {
//     num1 = Number(
//       prompt(
//         `Số bạn vừa nhập không phải là 1 số hợp lệ, vui lòng nhập lại !\nNhập số thứ nhất `
//       )
//     );
//   }

//   let num2 = Number(prompt("Nhập số thứ nhất"));
//   while (isNaN(num2)) {
//     num2 = Number(
//       prompt(
//         `Số bạn vừa nhập không phải là 1 số hợp lệ, vui lòng nhập lại !\n\Nhập số thứ nhất `
//       )
//     );
//   }

//   const tong = num1 + num2;

//   console.log(`Tổng của 2 số ${num1} và ${num2} là : ${tong}`);
// };

// getSum();
