VD: về AJAX Call

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Ví dụ về AJAX</h1>

    <script>
      const myRequest = new XMLHttpRequest();
      myRequest.open(
        "GET",
        " https://geocode.xyz/52.508,13.381?geoit=json",
        true
      );
      myRequest.send();

      console.dir(myRequest);
      myRequest.onload = function () {
        const data = myRequest.responseText;
        console.log(data);
        const data2 = JSON.parse(data);

        console.log(data2);
        console.log(data2.country);
      };
    </script>
  </body>
</html>

```

## II. Promise

### 1. Tạo 1 promise

Hàm khởi tạo `Promise` chấp nhận một hàm gọi lại thường thực hiện một hoạt động không đồng bộ. Chức năng này thường được gọi là executor (người thực thi).

Đổi lại, trình thực thi chấp nhận hai `hàm gọi lại` làm tham số với tên resolve và reject.

Lưu ý rằng các hàm gọi lại được truyền vào trình thực thi chỉ là resolve và reject theo quy ước.

Nếu hoạt động không đồng bộ hoàn tất thành công, trình thực thi sẽ gọi hàm resolve() để thay đổi trạng thái của lời hứa từ đang chờ xử lý (pending) thành được thực hiện với một giá trị.

Trong trường hợp có lỗi, trình thực thi sẽ gọi hàm reject() thay đổi trạng thái của lời hứa từ đang chờ xử lý sang bị từ chối với lý do lỗi.

Khi một Promise đạt đến trạng thái được thực hiện hoặc bị từ chối, Promise sẽ ở trạng thái đó và không thể chuyển sang trạng thái khác.

Nói cách khác, một lời hứa không thể đi từ fulfilledtrạng thái sang trạng thái rejected và ngược lại. Ngoài ra, nó không thể quay trở lại từ trạng thái fulfilled hoặc trạng thái rejected về trạng thái pending .

Khi một đối tượng Promise mới được tạo, trạng thái của nó đang chờ xử lý. Nếu một lời hứa đạt được trạng thái fulfilled hoặc rejected, nó sẽ được giải quyết .

### 2. Các phương thức then, catch, finally

`Phương thức then`
cú pháp

```
promise.then(onFulfilled,onRejected);
```

Phương thức then () gọi onFulfilled () với một giá trị(value), nếu promise được thực hiện hoặc onRejected () với 1 lỗi(error) nếu promise bị từ chối.

`Phương thức catch()`
cú pháp

`Phương thức finally()`
Phương thức này sẽ gọi 1 hàm gọi lại kể cả khi promise của chúng ta ở bất kỳ nào (trạng thái fulfilled hoặc rejected)

```
promise.catch(onRejected);
```

Phương thức catch() gọi onRejected() với 1 lỗi (error) nếu promise bị từ chối (thất bại)

VD: về callback hell

```
<!DOCTYPE html>
<html>
  <body>
    <h1>Ví dụ về callback hell</h1>
    <script>
      setTimeout(function () {
        const number = prompt("Nhập 1 số bạn muốn : ");
        console.log(number);
        console.log("Việc thứ 1");

        // lại gọi 1 callback khác bên trong
        setTimeout(function () {
          const number2 = number ** 2;
          console.log(`Lũy thừa của ${number} là : ${number2}`);
          console.log("Việc thứ 2");

          // lại gọi 1 call back nữa bên trong
          setTimeout(function () {
            const number3 = number2 * 10;
            console.log(`Giá trị của number3 là ${number3}`);
            console.log("Việc thứ 3 ==> Done !");
          }, 2000);
          //
        }, 2000);
        //
      }, 2000);
      //
    </script>
  </body>
</html>
```

VD: về Promises

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Ví dụ về Promise</h1>

    <script>
      const soDoan = Number(prompt("Nhập bộ số bạn dự đoán : "));
      const ketQua = 123456;

      // Vé số
      const myPromise = new Promise(function ExcutorFunc(thanhCong, thatBai) {
        if (soDoan === ketQua) {
          const dataThanhCong = "Bạn đã trúng giải độc đắc của chúng tôi";
          thanhCong(dataThanhCong);
        } else {
          const dataThatBai = "Chúc bạn may mắn lần sau !";
          thatBai(dataThatBai);
        }
      }); // ==> sẽ tự động trả về 1 pr0mise

      console.log(myPromise);

      // gọi phương thức then
      const promise_2 = myPromise.then(
        function thanhCong(dataThanhCong) {
          console.log(dataThanhCong);
        },
        function thatBai(dataThatBai) {
          console.log(dataThatBai);
        }
      );

      console.log(promise_2);
    </script>
  </body>
</html>

```

VD: về Fetch API

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Ví dụ về Fetch</h1>

    <script>
      const myResponse = fetch("https://geocode.xyz/52.508,13.381?geoit=json");
      // fetch sẽ trả về cho ta 1 promise

      // để sử lý các trạng thái ta sẽ dùng các phương thức của promise

      myResponse
        .then((res) => {
          // phương thức .json sẽ trả về 1 promise và ở trạng thái thành công
          // nó sẽ trả về kết quả là data ta mong muốn
          return res.json();
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    </script>
  </body>
</html>
```
