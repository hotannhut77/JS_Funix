# Bài 9 - Cách thức JS thực thi chương trình - Phần 1

## I. Giới thiệu

Trong bài học nỳ, chúng ta sẽ xem xét "hậu trường" của JS và tìm hiểu cách thức hoạt động của ngôn ngữ JS. Chúng ta sẽ nâng tầm các kiến thức cơ bản về JS lên một cấp độ hoàn toàn mới, chúng ta sẽ hiểu chính xác mọi thứ diễn ra như thế nào trước khi thực sự triển khai chương trình. OK ! Cùng thắc dây an toàn và lên chiến bay khám phá những điều diệu kỳ của JS nào ! Let's go !

## II. Tổng quan NÂNG CAO về JavaScript

(Khá là trừu tượng và lý thuyết nhưng chúng ta cũng cần phải nắm chắc - theo cách hiểu và diễn đặt được chứ không cần rập khuôn hay thuộc lòng đâu nhé !)

==> JavaScript là ngôn ngữ laaph trình bậc cao, hướng đối tượng, đa mô hình, có cơ chế quản lý bộ nhớ, được thông dịch hoặc biên dịch JIT, có tính động, đơn luồng, có các hàm first-class và mô hình đồng thờ non blocking event loop.

==> Tóm lại là JS có 8 đặc định sau, chúng ta sẽ đi chi tiết vào 8 đặc điểm đó ngay sau đây :

1. JS là ngôn ngữ lập trình bậc cao (High Level)

- Mọi chương trình chạy trên máy tính đều cần một số tài nguyên phần cứng, chẳng hạn như bộ nhớ và CPU. Các ngôn ngữ cấp thấp, chẳng hạn như C thì chũng ta phải yêu cầu máy tính cung cấp bộ nhớ để tạo một biến mới. Mặt khác , các ngôn ngữ cấp cao như JS, Python, chúng ta không phải quản lý tài nguyên vì những ngôn ngữ nanyf có các phần `trừu tượng` được gọi và loại bỏ tất cả các công việc đó khỏi chúng ta. Điều này làm cho ngôn ngữ bặc cao dể học và dễ sử dụng hơn, nhưng nhược điểm là các chương trình bậc cao sẽ không bao giờ nhanh như chương trình C (C rất nhanh nhé , thậm chí nếu chúng ta viết bằng ngôn ngữ Assembly thì càng nhanh hơn nữa :v)

2. Có cơ chế quản lý bộ nhớ (garbage collected)

- Cơ chế quản lý bộ nhớ là một THUẬT TOÁN bên trong công cụ JS tự động loại bỏ các đối tượng cũ, đối tượng lâu không sử dụng khỏi bộ nhớ máy tính. Nó giống như một công cụ dọn dẹp, dọn sạch bộ nhớ theo thời gian

3. Cơ chế thông dịch hoặc biên dịch Just In Time
4. Ngôn ngữ đa mô hình (multi-paridigm)
5. Ngôn ngữ hướng đối ượng dựa trên nguyên mẫu (prototype)

- Hầu hết mọi thứ trong JS đều là đối tượng ngoại trừ các giá trị nguyên thủy
- VD: mảng cũng là 1 đối tượng, nên chúng có các phương thức như push, pop,.. các phương thức này là do kế thừa theo prototype. Prototype giống như một template (mẫu), Array.prototype chứa tất cả các phương thức của mảng

6. Ngôn ngữ với các hàm first-class
7. Ngôn ngữ có tính động
8. Ngôn ngữ ĐƠN LUỒNG và mô hình đồng thời event loop & non-blocking

- JS là ngôn ngữ lập trình đơn luồng, có nghĩa là chúng chỉ có thể làm từng việc một nên chúng cần có mô hình đồng thời .
- Mô hình đồng thời là cách mà công cụ JS xử lý nhiều tác vụ cùng một lúc
- Với đơn luồng, nếu một nhiệm vụ kéo dài nó sẽ chặn cả luồng đơn chạy , khi đó chúng ta cần trạng thái non-blocking (không dừng)

VD:

- Event loop thực hiện nhiều tác vụ lâu dài và thực thi nó ở background sau đó đưa chúng trở lại luồng chính sau khi chũng hoàn thành

==> Tóm lại JS là 1 mô hình đồng thời với non-blocking event loop với 1 luồng duy nhất

## II. JavaScript Engine và Runtime

### 1. Định nghĩa JS Engine

- JS engine là 1 chương trình máy tính thực thi code JS
- Mỗi trình duyeeth hiện nay đều có JS Engine , công cụ được biết đến nhiều nhất là Google V8

### 2. Cấu trúc của JS Engine

- Bất kỳ JS engine nào cũng chứa call stack và heap
- Call stack là nơi code được thực thi bằng cách sử dụng Execution Context (EC)- mình sẽ nói rõ chi tiết hơn về EC sau
- Heap là một vùng nhớ không có cấu trúc, lưu trữ tất cả các đối tượng (Object) mà ứng dụng cần

### 3. Phân biệt giữa thông dịch và biên dịch

### 4. JS kết ==>

### 4. trình biên dịch ...

### 4. JS Runtime

Về cơ bản nôm na, JS Runtime trong trình duyệt như một hợp, thùng chứa lớn chứa tất cả những thứ cần thiết để sử dụng JS, bao gồm:

- JS Engine
- WEB APIs
- Call back Queue

<imt src = "http://thaunguyen.com/blog/wp-content/uploads/2018/06/eventloop.png">
==> Trọng tâm nhất vẫn là JS Engine (chúng ta đã tìm hiểu ở trên)
==> Về WEB APIs

- JS Runtime bao gồm WEB APIs (các chứng năng được chung cấp cho engine), VD : DOM, Ajax, setTimeout,Fetch,...
- JS có quyền truy cập vào API này thông qua đối tượng window ? Là sao ?
  OK! để mình ví dụ :

VD:

```
// như đã nói hàm setTimeout là 1 API
// Thông thường ta truy cập API này bằng cách viết
// thế này đúng không ??
setTimeout(function () {
  console.log("In ra sao 2 giây !");
}, 2000);

// nhưng thật ra nó tương đương với cách viết thế này
// ==> do đó mới nói ta truy cập các API qua đối tượng window -->OK!
window.setTimeout(function () {
  console.log("In ra sao 2 giây !");
}, 2000);

```

==> Về Callback Queue (Queue gọi là hàng đợi)

- Callback Queue là cấu trúc dữ liệu có chứa tất cả các hàm callback sẳn sàng để thực thi
  (Hiểu nôm na là thế này, Callback queue sẽ nhận các callback function và xếp vào hàng đợi, sau đó quyết định function nào được chạy tiếp theo bằng nguyên tắc FIFO - First In First Out (vào trước ra trước)==> giống như cách chũng ta xếp hàng mua vé xem phim chẳng hạn ==> Còn về chi tiết tổng kết hoạt động cụ thể tất cả các thành phần trong JS Runtime hoạt động thế nào thì mình sẽ tổng kết lại sau, nhưng trước hết chũng ta cần biết chức năng của các phần khác nhau để hiểu nó hoạt động ra sao !!!!)

VD: Qua ví dụ sau mình sẽ giải thích kỹ hơn về Callback Queue

```
// như đã nói hàm setTimeout là 1 API
// Thông thường ta truy cập API này bằng cách viết
// thế này đúng không ??
setTimeout(function () {
  console.log("In ra sao 2 giây !");
}, 2000);

// nhưng thật ra nó tương đương với cách viết thế này
// ==> do đó mới nói ta truy cập các API qua đối tượng window -->OK!
window.setTimeout(function () {
  console.log("In ra sao 2 giây !");
}, 2000);

for (let i = 0; i <= 10; i++) {
  console.log("Ok " + i);
}

```

VD: Hàm được truyền vào để xử lý sự kiện trên 1 phần tử DOM cũng là một hàm callback, hay hàm được gọi lại để thực thi sau 1 khoảng thời gian nào đó dùng trong setTimeOut cũng là một callback function.

VD:

```
document.querySelector("h1").addEventListener("click", function () {
  this.style.backgroundColor = "red";
});

```

- Sau khi 1 event xảy ra, hàm callback được đặt vào callback queue, sau đó khi call stack rỗng, hàm callback được đặt vào stack để nó thực thi, quá trình này xảy ra theo cơ chế event loop ?? Vậy cơ chế Event Loop là gì? hoạt động ra sao ??

==> Cơ chế Event Loop

- Event Loop nhận các hàm callback từ Callback queue và đưa chúng vào call stack để thực thi . --> Đó là về chức năng của Event Loop về cơ bản là nó làm thế ? Nhưng cụ thể nó làm ra sao, dựa trên nguyên tắc gì để nó có thể quyết định callback nào sẽ được nó chọn để lấy đi thực thi ??

--> Ok ! Chi tiết hơn nó sẽ hoạt động ra sau : Phần sau chũng ta sẽ hiểu rõ hơn nhé !
Nó sẽ quan sát xem call stack trong JS engine có trống hay không (hiểu nôm na là có đang rãnh hay không ấy, nêu trống thì nó sẽ lấy callback ở đầu hàng đợi trong callback queue để đưa vào call stack để call stack thực thi cách dòng code trong callback function !! Vậy nếu call stack không rãnh thì sao --> thì nó chờ cho rãnh thôi !) Mình ví dụ cụ thể nhé !

VD:

```
document.querySelector("h1").addEventListener("click", function () {
  this.style.backgroundColor = "red";
});

let i = 0;
while (i < 100000) {
  console.log(i++);
}

```

## III. Execution Context và Call Stack

Phần này chúng ta sẽ học để hiểu rõ chi tiết về cách 1 chương trình JS (code của chúng ta) chạy ra sao, đặc biệt là call stack mình nói ở bên trên nó hoạt động thế nào nhé !

VD: đoạn code sau sẽ thực thi ra sao ?

```
const second = () => {
  console.log("Hello there!");
};

const first = () => {
  console.log("Hi there!");
  second();
  console.log("The End");
};

first();

```

==> Giải thích

<img src = "https://images.viblo.asia/e6a202c0-2dbc-4ec0-af91-0fc89500fb72.png">

- Đầu tiên, khi ta chạy đoạn code trên, một EC toàn cục sẽ tạo ra (trong trường hợp này ta biểu diễn nó bằng hàm main() ) và nó sẽ được push (đẩy) vào ngăn xếp.
- Tiếp đến , code chạy đên dòng gọi hàm `first();` thì hàm first sẽ được thực thi (lúc này JS Engine sẽ tạo ra 1 EC cục bộ đại diện cho hàm first)
  (Một số lưu ý : 1. là hàm chỉ được thực thi khi ta gọi hàm mà thôi , 2. mỗi lần hàm được gọi thì thì sẽ sinh ra các EC KHÁC NHAU nhá !)

- Tiếp theo, `console.log("Hi there!");` được gọi (nhớ là nó cũng là 1 hàm cho nên khi gọi nó cũng sinh ra 1 EC), thì nó sẽ được push vào ngăn xếp, sau khi thực thi dòng này xong, tức là hàm này được thực thi xong (kết thúc) thì nó sẽ được pop (lấy ra) khỏi ngăn xếp .

- Sau đó đến dòng tiếp theo, hàm `second()` được gọi cũng tương tự nó sẽ tạo ra 1 Ec và được đẩy vào ngăn xếp , vào code bên trong hàm này sẽ được thực thi

- Ta xem hàm second: đầu tiên `console.log("Hello there!");` câu lệnh này sẽ được thực thi, nó là 1 hàm nên JS sẽ tạo 1 EC cục bộ cho nó và đẩy nó vào ngăn xếp, thwucj thi xong nó sẽ được lấy ra khỏi ngăn xếp. Và vì hàm này chỉ có 1 dòng code này nên thực thi xong dòng này cũng là kết thúc hàm second , do đó hàm second kết thúc thì nó cũng bị lấy ra khỏi ngăn xếp.

- Tiếp đến, `console.log("The End");` được thực thi, cũng tương tự nó được đẩy vào ngăn xếp để thực thi, sau khi thực thi xong nó sẽ bị lấy ra khỏi ngăn xếp. Và sau đó, hàm first của chúng ta cũng đã thực thi xong tất cả các câu lệnh nên kết thúc, lúc này nó cũng được lấy ra khỏi ngăn xếp

- Và cuối cùng , vì không còn câu lệnh nào nữa (chương trình thực thi xong) nên EC toàn cục (main) cũng sẽ bị xóa khỏi stack .

==> Mọi người đã có được cái nhìn tổng thể về call stack hoạt động thế nào chưa ?? Thử 1 vài ví dụ và tự phân tích chúng ta sẽ hiểu ngay thôi !

Ta đi vào chi tiết hơn về từng thành phần EC là gì ? EC có những gì , vâng vâng !

### 1. Quá trình thực thi chi tiết của 1 chương trình JS

Sau khi quá trình trình BIÊN DỊCH hoàn tất, mã máy được đưa vào quá trình thực thi , các bước tổng quát , cơ bản như sau (cũng như ví dụ mình nói bên trên thôi !)

1. Tạo ra global excecution context (EC) (ngữ cảnh thực thi toàn cục) - dành cho những code thuộc top-level (code thuộc top-level là những code không nằm trong bất kỳ function nào)

- Execute context là ngữ cảnh thực thi, định nghĩa là môi trường thực thi đoạn code JS, ===> nó giống như một chiếc hộp lưu giữ tất cả các thông tin cần thiết để code được thực thi , như là : các biến cục bộ hay các đối số truyền vào

VD:

```

```

- Code JS luôn chạy trong một EC
- Trong bất kỳ dự án JS nào cũng chỉ có duy nhất 1 global EC là context mặc định để thực thi các code thuộc top level

2. Sau khi tạo ra global EC, thì nó sẽ tiến hành thực thi code trong EC này, tức là thực thi các dòng code top level ấy !

3. Sau đó nếu gặp các hàm thì nó sẽ thực thi các hàm (lưu ý khi gặp 1 lời gọi hàm nó sẽ tạo ra 1 EC cục bộ cho hàm ấy và sau đó thực thi code trong hàm ấy), hoặc nó sẽ thực thi các đoạn code bất đồng bộ hay chờ thwucj thi các sự kiện (hay còn gọi là chờ callback đưa lên call stack thông qua event loop để call stack có thể thực thi các dòng code bên trong callback ấy)

- Lưu ý như trên: Khi 1 hàm được gọi sẽ có 1 EC được tạo ra (và lưu ý là sẽ khác nhau ở từng lần gọi nhá , cho dùng là gọi chung 1 hàm ! Sau này mình sẽ ví dụ và nói sâu hơn ở các bài sau !)
- Các EC này kết hợp với nhau tạo thành các call back ????

### 2. Tìm hiểu sâu hơn , bên trong ngữ cảnh thực thi (Execution Context)

Bên trong EC bao gồm :

1. Variable Environment chứa các biến, khai báo hàm và cũng có 1 đối tượng (object) argument đặc biệt (chứa tất cả các đối số được truyền vào hàm thuộc về EC hiện tại --> EC hiện tại ? Why ? --> ý muốn nói mỗi lần gọi khác nhau sẽ có môi trường biến khác nhau ấy --> do đó mà mình nói mỗi lần gọi hàm sẽ sinh ra những EC khác nhau đó !)

2. Scope Chain bao gồm các tham chiếu đến các biến nằm ngoài hàm hiện tại (chúng ta sẽ tìm hiểu nó sau !)

3. Từ khóa this (cũng sẽ tìm hiểu ở bài sau)

LƯU Ý : EC của hàm mũi tên sẽ không lấy được arguments và cũng không có this

VD:

```
viết 1 ví dụ
```

==> Call Stack vs EC ??

- Call satck là nơi các EC xếp chồng lên nhau, EC ở trên cùng của stack là thứu hiện đang chạy (đang được thực thí code) và khi chạy xong nó sẽ bị xóa khỏi stack (tứ EC - ngữ cảnh thực thi sẽ bị xóa - và toàn bộ những gì bên trong EC cũng sẽ bị xóa đi 1 cách không thương tiết :v)

- Việc thực thi diễn ra theo nguyên lý của stack - LIFO - Last In First Out

VD :

```
Viết 1 ví dụ !
```

## IV. Scope và Scope Chain

### 1. Các khái niệm về scope

- Scoping kiểm soát cách JS Engine sắp xếp và truy cập các biến trong chương trình

- Lexical scoping là cách tổ chức và truy cập các biến hoàn toàn bị vị trí của các hàm và các khối trong code kiểm soát. Ví dụ một hàm được viết trong một hàm khác có quyền truy cập các biến của hàm cha. Scope bị ảnh hưởng bởi vị trí mà chúng ta đặc các hàm và khối code của mình.

- Scope là không gian hoặc môi trường khai báo một biến nhất định.

- Sope của một biến là toàn bộ khu vực code có thể truy cập vào biến đó.