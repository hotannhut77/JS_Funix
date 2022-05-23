# Bài 6 - Trở thành lặp trình viên tốt

## I. Giới thiệu

- Bên cạnh việc viết được những dòng code có thể chạy và đáp ứng được yêu cầu bài toán hay giải quyết được vấn đề, chúng ta cần phải chú ý thêm đến chất lượng những đoạn code (như các quy tắc đặt tên biến, hàm sao cho hợp lý, rõ nghĩa, các đoạn code ngắn gọn không bị trùng lặp code, hay đảm bảo được tính module hóa ,...) . Và để trở thành 1 lập trình viên giỏi, mình nghĩ chúng ta cần có thêm một số kỹ nanwng khác để có thể làm việc hiệu quả, cũng như có một tư duy giải quyết vấn đề đúng đắn.
  ==> Do đó, trong bài học này, chúng ta sẽ tìm hiểu vê một số kỹ năng quan trọng đó mà chúng ta cần phải nắm bắt để có thể trở thành một lặp trình viên JS giỏi :

- Thiết lặp môi trường viết code
- Cách tư duy vf giải quyết vấn đề
- Debug - gỡ lỗi

## II. Thiết lặp Prettier và VS Code

Sử dụng Prettier cũng như các công cụ (plugins) định dang code khác làm cho code trong cùng một dự án trở nên nhất quán, đưa code về cùng một định dạng. Ngoài ra còn một số chức năng như tự động lưu, tự động thay đổi dấu ngoặc đơn, hàm mũi tên, ... Prettier cũng cung cấp khả năng cài đặt các cách định dạng mà mình muốn.

- Cài đặt Prettier
- Đặt Prettier là formater mặc định

......

## III. Cài đặt Node.js và thiết lập Dev Environment

- Cài đặt Live Server
- Cài đặt Node.js

## IV. Tư duy giải quyết vấn đề và viết code hiệu quả

Từ bài giảng của jonas chúng ta cũng có thể rút ra một số ý cần lưu ý như sau

### 1. Những nguyên nhân phổ biến dẫn đến thất bại khi học code :

- Không có mục tiêu rõ ràng ngay từ đầu

- Bắt đầu bằng cách xem một bài khóa học và sao chép code một cách mù quáng mà không quan tâm nó hoạt động như thế nào

- Trong khi học không cố gắng củng cố kiến thức qua các ví dụ và làm các bài tập nhỏ hay ghi chép

- Bất cứ khi nào viết code một chút, nhanh chóng cảm thấy nhàm chán khi code không gọn hoặc không hiệu quả

- Nhanh mất đi động lực vì nghĩ rằng mình sẽ không bao giờ biết hết mọi thứ

- Luôn học một mình và không chia sẻ việc học cùng ai

- Sau mỗi khóa học nghĩ răng mình đã trở thành một lập trình viên web và nộp CV xin việc

### 2. Làm thế nào để học code hiệu quả hơn

- Lập một mục tiêu học tập cụ thể

- Thay vì sao chép hãy cố gắng hiểu chúng và cố gắng gõ code

- Củng cố kiến thức bằng cách áp dụng nó ngay khi có thể, tự thử thách bản thân

- Tự tạo một project và áp dụng các kiến thức đã học và tìm tòi thêm, luôn luôn phải thực hành không phụ thuộc vào người hướng dẫn và phải tự suy nghĩ thử thách cho bản thân và chinh phục chúng là cách để giỏi hơn

- Khi mới học chỉ cần viết nhiều code nhất có thể, clean code và hiệu quả sẽ đi kèm với thời gian và kinh nghiệm và có thể quay lại chỉnh sửa code bất cứ khi nào

- Chấp nhận sự thật là không bao giờ có thể biết hết được mọi thứ vì lập trình web là một lĩnh vực rộng lớn, không nên so sánh mình với những lập trình viên hàng đầu

- Không học một cách tách biệt mà nên học cùng nhau bởi vì việc giải thích cho người khác được có nghĩa là mình đã hiểu

- Hoàn thành khóa học không phải là trở thành lập trình viên, trở thành lập trình viên rồi nhưng cũng không thể ngừng học những cái mới

### 3. Cách tư duy của lập trình viên trong việc giải quyết vấn đề

### 4. Sử dụng google, stackOverflow và MDN

## V. Gỡ lỗi (debug)

### 1. Debugging (Fixing Errors) :

==> Bug là gì ?

- Bug là một lỗi hoặc một vấn đề mà một chương trình máy tình gặp phải, nói các khác là bất kỳ hành vi, trạng thái không mong muốn nào xuất hiện trong một chương trình.

- Thuật ngữ Bug được đưa vào từ năm 1940 khi bug gây ra Lỗi trong máy tính harvard

- Bug là một điều thường gặp khi phát triển một chương trình phần mềm, mọi chương trình phần mềm đều có bug và có thể không phát hiện ra chúng trong nhiều năm

VD:

==> Quy trình debugging : về cơ bản là tìm kiếm bug, sữa chữa và ngăn chặn chúng

- Bước đầu tiên là IDENTITY, bắt đầu phát hiện ra bug, bug thường được phát hiện trong khi phát triển, những bug phát hiện muộn khi sản phẩm đã đến tay người dùng cuối sẽ gây ra nhiều hậu quả nghiêm trọng, chính vì thế việc phát hiện ra bug sớm là điều rất cần thiết. Trong khi xác định bug thì cũng phải xác định bối cảnh mà bug xảy ra. Ví dụ một số bug chỉ có thể xảy ra khi dùng trình duyệt nhất định, hoặc một số người dùng nhất định vì lí do nào đó.

- Bước thứ 2 là FIND, tìm bug đó ở đâu trong code. Với những code đơn giản thì ta có thể console, nhưng với code phức tạp thì phải dùng đến những công cụ debugging

- Bước thứ 3 là FIX, chỉnh sửa lại code

- Bước thứ 4 là PREVENT, ngăn chặn để bug đó sẽ không bao giờ xảy ra trong chương trình một lần nữa

### Debugging trên Console và với công cụ Breakpoints

....

## VI. Tổng kết

Trong bài học này, về cơ bản không quá quan trọng như những bài trước hay những bài tiếp theo, nhưng nó sẽ giúp ta có cái nhìn tổng quan và hướng tư duy logic hơn, giải quyết vấn đề tốt hơn và code hiệu quả hơn.
==> Do đó, ở bài này, ta cần nắm các kiến thức sau :

- Cài đặt thêm được 1 số các extensions để code hiệu quả và chuyên nghiệp nhanh chống hơn

- Nắm bắt 1 số thủ thuật để code của chúng ta đẹp và đúng format hơn

- Nắm bắt và vận dụng các phương pháp để có thể học tập và luyện code hiệu quả hơn

- Nắm bắt và vận dụng được 4 bước chung trong cách giải quyết vấn đề

- Phát hiện, phân tích, khắc phục và ngắn chặn bug trong lặp trình
