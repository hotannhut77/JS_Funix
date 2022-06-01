"use strict";
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

const submitBtn = document.getElementById("submit-btn");
const tableBodyEl = document.getElementById("tbody");

// let deleteElList = document.querySelectorAll(".btn.btn-danger");
const healthyBtn = document.getElementById("healthy-btn");

// bắt sự kiện nhấn vào nút submit
submitBtn.addEventListener("click", function () {
  // 1.lấy dữ liệu
  // 2. kiểm tra tính hợp lệ của dữ liệu
  // Nếu hợp lệ thì ==>
  // 3. Thêm dữ liệu vào mảng thú cưng
  // 4. xóa dữ liệu nhập vào từ form
  // 5. hiển thị danh sách thú cưng ra bảng
});

// Viết hàm hiển thị thú cưng vào bảng
function renderTableData(petArr) {}

// Viết hàm xóa thú cưng

// Bắt sự kiện nhấn vào nút 'Show Healthy Pet'
healthyBtn.addEventListener("click", function () {
  // LÀM THẾ NÀO ĐỂ HIỂN THỊ CÁC THÚ CƯNG KHỎE MẠNH ???
  // từ danh sách các thú cưng
  // lọc ra các thứ cưng được coi là khỏe mạnh vào lưu vào 1 mảng mới (VD: healthyPetArr)
  // sau đó gọi hàm hiển thị thú cưng với tham số đưa vào là mảng healthyPetArr
  // ---
  //
  // ---
  // LÀM THẾ NÀO ĐỂ THAY ĐỔI TEXT : TỪ "Show Healthy Pet" THÀNH "Show All Pet"
  // VÀ NGƯỢC LẠI ???
  // Ta dùng 1 biến cờ hiệu
});

// Tính chỉ số BMI
// có nhiều cách để làm bài này : Ví dụ dùng DOM thuần túy hoặc
// thêm thuộc tính BMI cho thú cưng
