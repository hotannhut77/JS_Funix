// ví dụ ta có 1 mảng các số nguyên sau

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// yêu cầu tính tổng của các phần tử có trong mảng

const total1 = arr.reduce(function (pre, cur) {
  return pre + cur;
});
console.log(total1);

const total2 = arr.reduce((pre, cur) => pre + cur);
console.log(total2);

const total3 = arr.reduce(myCallBack);
console.log(total3);

function myCallBack(pre, cur) {
  return pre + cur;
}

// Mình làm cả 3 cách nhá , để hiểu rõ hơn về cách hoạt động của nó
