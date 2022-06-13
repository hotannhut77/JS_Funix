let a = 10;
let b = a;
/// tạo 1 ô nhớ , vd có địa chỉ : 0010: ==> value : 10
/// tiến hành trỏ biến a đến địa chỉ 0010

// dòng
// b cũng trõ đến 0010

b = 20;
// tạo ra ô mới , VD: địa chỉ 0DE : ==> value : 20
// cho b trở đến 0DE

/// a : 0010 --> 10
/// b : 0DE --> 20

let sv1 = {
  name: "ABC",
};

/// bên heap sẽ tạo ra ô nhớ : vd: 00DE : value : {name: "ABC"};
// call satck tạo ra 1 ô nhớ : 001 : ==> value : 00DE
// trỏ sv1 vào 001:
// gọi sv1 : {name: "ABC"};

let sv2 = sv1;

// SV2 : trỏ tới 001 ==> SV2 : {name: "ABC"};

// sv2.name = "OK";

sv2 = {
  num: 10,
  num2: 100,
};

// 002 --> 00DE2
/// đổi thành {name: "OK"}
