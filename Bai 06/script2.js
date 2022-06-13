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

const petArr = [pet1, pet2, pet3, pet4]; // tương ứng là ta đã thwucj hiện được tính năng thêm thú cưng khi nhập ;

const tbodyEl = document.getElementById("tbody");

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
		 <td><button class = "btn-delete">Delete</button></td>
		</tr> 
	  `;
  }

  tbodyEl.innerHTML = html;
};

tableData(petArr);

tbodyEl.addEventListener("click", function (e) {
  if (e.target.className !== "btn-delete") return;

  const isDelete = confirm("Bạn có chắc chắn muốn xóa hay không ?");

  if (isDelete) {
    const id = e.target.parentElement.parentElement.children[0].innerHTML;
    deletePet(id);
  }
});

function deletePet(id) {
  for (let i = 0; i < petArr.length; i++) {
    if (petArr[i].id === id) {
      petArr.splice(i, 1);
      break;
    }
  }
  tableData(petArr);
}
