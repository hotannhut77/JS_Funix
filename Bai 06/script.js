"use strict";

const pet1 = {
  id: "P001",
  name: "Lucky",
  age: 3,
  type: "Dog",
};

const pet2 = {
  id: "P002",
  name: "Bông",
  age: 2,
  type: "Cat",
};

const pet3 = {
  id: "P003",
  name: "Đen",
  age: 4,
  type: "Dog",
};

const pet4 = {
  id: "P004",
  name: "Hoàng thượng",
  age: 3,
  type: "Cat",
};

const petArr = [pet1, pet2, pet3, pet4];

console.table(petArr); //

// Vấn đề : cho 1 mảng chứa các đối tượng thú cưng ,
// hãy yêu cầu người dùng nhập vào id của thú cưng bạn muốn xóa
// và sau đó xóa đi thú cưng đó nếu có trong mảng, rồi thông báo
// xóa thành công. Nếu không có trong mảng thì thông báo thú cưng
// có id đó không có trong mảng

/**
 * Bước 1: Yêu cầu người dùng nhập vào id của thú cưng cần xóa
 *  bằng câu lệnh prompt
 *
 * Bước 2 : duyệt qua mảng để kiểm tra xem trong mảng có thú cưng nào có
 * id trùng với id vừa nhập vào không ?
 *  Nếu có thì tiến hành xóa nó khỏi mảng
 * - Câu hỏi : làm sao để xóa thú cưng trong mảng
 * --> dùng phương thức splice() để xóa 1 phần tử nào đó khi biết vị trí
 * của phần tử ấy trong mảng
 * - Vì các id là duy nhất nên nếu phát hiện ra có thú cưng và xóa rồi thì
 * phải dùng break để thoát vòng lặp ngay
 *
 * Bước 3: Nếu duyệt qua mảng mà k có thú cưng nào có id nào trùng thì
 * thông báo không có thú cưng nào có id vừa nhập vào
 * - Làm sao để biết là không có thú cưng nào có id trùng với id nhập vào??
 * --> ta dùng 1 biến `isDelete` làm cờ hiệu để biết được điều này
 *
 * Bước 4 : Hiển thị lại bảng dữ liệu các thú cưng
 * --> có thể dùng câu lệnh console.table(petArr); để hiển thị lại mảng
 * các thú cưng
 *
 */

const deletePet = function () {
  // B1: yêu cầu người dùng...
  const id = prompt("Nhập id thú cưng bạn muốn xóa : ");

  // cờ hiệu
  let isDelete = false;

  // duyệt mảng --> để tìm id trùng
  for (let i = 0; i < petArr.length; i++) {
    // if ---> để kiểm tra trùng ID
    if (petArr[i].id === id) {
      // xóa khỏi mảng
      petArr.splice(i, 1); // xóa phần tử thứ i
      alert("Đã xóa thành công thú cưng có id là : " + id);
      isDelete = true;
      break;
    }
  }

  if (!isDelete) {
    alert("Không có thú cưng nào có id là : " + id);
  }

  console.table(petArr);
};

deletePet();
