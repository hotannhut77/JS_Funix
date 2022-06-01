("use strict");

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

const tbodyEl = document.getElementById("tbody");
// hàm này có chức năng : hiển thị bảng dữ lieuj thú cưng có trong arr đưa vào

const tableData = function (arr) {
  tbodyEl.innerHTML = "";
  let html = "";
  for (let i = 0; i < arr.length; i++) {
    html += `
	 	<tr>
		 <td>${arr[i].id}</td>
		 <td>${arr[i].name}</td>
		 <td>${arr[i].age}</td>
		 <td>${arr[i].type}</td>
		 <td><button onclick = "deletePet('${arr[i].id}')" dataid = "${arr[i].id}">Delete</button></td>
		</tr>
	  `;
  }

  tbodyEl.innerHTML = html;
};

tableData(petArr);

const deletePet = function (id) {
  console.log(id);
  for (let i = 0; i < petArr.length; i++) {
    if (petArr[i].id === id) {
      petArr.splice(i, 1);
      break;
    }
  }
  tableData(petArr);
};
