# Lab 3

## Lab 3.1. Chuyển đổi kiểu và ép kiểu (10 phút)

1. Dự đoán kết quả của 5 phép toán sau mà không cần thực thi:

'9' - '5';

'19' - '13' + '17';

'19' - '13' + 17;

'123' < 57;

5 + 6 + '4' + 9 - 4 - 2;

2. Thực hiện các phép toán để kiểm tra xem bạn đoán đúng không.

==> Phần này khá đơn giản !

## Lab 3.2. Toán tử bằng: == với === (40 phút)

1. Khai báo biến 'numNeighbours' dựa trên prompt input sau: prompt('How many neighbour countries does your country have?');
2. Nếu chỉ có 1 neighbour, hãy in ra console 'Only 1 border!' (sử dụng ==).
3. Sử dụng else-if block để ghi 'More than 1 border' trong trường hợp 'numNeighbours' lớn hơn 1.
4. Sử dụng else block để ghi 'No borders' (block này sẽ được thực thi khi 'numNeighbours' là 0 hoặc bất kỳ giá trị nào khác).
5. Kiểm tra code với các giá trị 'numNeighbours' khác nhau, gồm 1 và 0.
6. Thay == thành ===, và kiểm tra lại code với các giá trị 'numNeighbours' tương tự. Điều gì sẽ xảy ra khi numNeighbours = 1? Tại sao lại như vậy?
7. Cuối cùng, chuyển đổi 'numNeighbours' thành một số, và xem điều gì sẽ xảy ra khi bạn nhập vào 1.
8. Hãy nêu lý do chúng ta nên sử dụng toán tử === và chuyển đổi kiểu trong trường hợp này.

==> Lab này chủ yếu để kiểm tra kiến thức về cơ chế hoạt động của == và ===
Chúng ta nhớ là: == thì ép kiểu rồi so sánh (nêu nếu khác kiểu mà nội dung giá trị giống nhau thì cũng bằng nhau)
Còn === thì không ép kiểu khi so sánh (nêu nếu khác kiểu mà nội dung có giống nhau đi nữa thì vẫn k bằng nhau !)

##. Lab 3.3. Toán tử logic (25 phút)

1. Hãy vô hiệu hóa code trước đó để prompt không xuất hiện.
2. Giả sử Sarah đang tìm một quốc gia mới để sinh sống. Cô ấy muốn ở một đất nước sử dụng ngôn ngữ Tiếng Anh, dân số ít hơn 50 triệu người và không phải đảo quốc.
3. Hãy viết một câu lệnh if giúp Sarah tìm kiếm quốc gia phù hợp. Bạn cần viết điều kiện đánh giá tất cả các tiêu chí của Sarah. Hãy dành thời gian thực hiện điều này.
4. Nếu đất nước nhập vào phù hợp, in ra string như sau: 'You should live in Portugal :)'. Ngược lại, hãy in 'Portugal does not meet your criteria :('
5. Có thể đất nước mà bạn nhập không đáp ứng toàn bộ tiêu chí. Hãy quay trở lại và thay đổi tạm thời một số biến để điều kiện trở nên đúng (trừ khi bạn sống ở Canada).

## Lab 3.4. Câu lệnh switch (5 phút)

Sử dụng câu lệnh switch để ghi string sau cho 'language':

Chinese or Mandarin: 'MOST number of native speakers!'

Spanish: '2nd place in number of native speakers'

English: '3rd place'

Hindi: 'Number 4'

Arabic: '5th most spoken language'

Tất cả các log đơn giản khác 'Great language too :D'

== sử dụng switch - case có break;

## Lab 3.5. Toán tử điều kiện (ba ngôi) (10 phút)

Nếu dân số của đất nước lớn hơn 33 triệu người, sử dụng toán tử ba ngôi để in string sau ra console: 'Portugal's population is above average'. Ngược lại, hãy in 'Portugal's population is below average'. Lưu ý giữa hai câu này chỉ có một từ thay đổi!

Sau khi kiểm tra kết quả, hãy tạm thay đổi dân số thành 13 rồi thành 130. Hãy xem xét các kết quả khác nhau, rồi đặt dân số về lại ban đầu.

==> kiểm tra về toán tử có điều kiện

```
let population = 97;
const country = "Việt Nam";
population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

```
