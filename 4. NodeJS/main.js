// Buổi 26
// JSON
// Fetch
// Thư viện json-server: json-npm: cần tải nodejs > https://www.npmjs.com/package/json-server or https://github.com/typicode/json-server
// HTTP Protocol


// Json - Javascript object notation: là định dạng dữ liệu (viết dưới dạng chuỗi), được sử dụng trong tất cả ngôn ngữ lập trình
// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.

// Json thể hiện được các kiểu dữ liệu: string, number, booleean, null, array, object

// Mã hoá các kiểu dữ liệu thành Json <-> Json chuyển về các kiểu dự liệu gọi là Giái hoá
// Encode <-> Decode

// stringtify: convert kiểu dữ liệu ban đầu thành json
// <-> parse: chuyển từ json về thành kiểu dữ liệu

// Mục đích: BE tạo ra những chuỗi JSON cho FE làm việc

// The example for Parse:
let json1 = 'null';
console.log(JSON.parse(json1)); // Output: null

let json2 = '["JAVA","PHP"]';
console.log(JSON.parse(json2)); // Output: ['JAVA', 'PHP'] (array)

let json3 = '{"Name":"Elina","Years":20}'
console.log(JSON.parse(json3)); // Output: {Name: 'Elina', Years: 20} (object)

let json4 = '1';
console.log(JSON.parse(json4)); // Output: 1 (number)

let json5 = 'true';
console.log(JSON.parse(json5)); // Output: true (boolean)

let json6 = '"abc"'; // string phải để trong nháy đôi
console.log(JSON.parse(json6)); // Output: abc (string) 

// The example for Stringtify
console.log(typeof JSON.stringify(123)); // Output: 123 (string)
// output đều là kiểu dữ liệu string

let arr = ['ruby','PHP'];
console.log(JSON.stringify(arr)); // output: ["ruby","PHP"] (nháy kép)

let obj = {
    name: 'Na',
    year: 18
}
console.log(JSON.stringify(obj)); // output: {"name":"Na","year":18} (nháy kép)

// Fetch
// FE: làm về giao diện --> ng dùng tương tác

// API: cổng giao tiếp giữa FE và BE

// BE - router: làm về cơ sở dữ liệu, lưu trữ, edit, xoá

// BE trả về API (URL) ==> FE thông qua fetch (js) / ajax (jquery) / axios để lấy data ==> trả về json/xml ==> json.parse ==> render giao diện ==> type js (for,..)==> FE (HTML, CSS, Boottrap)

// EX:
fetch('http://apiforlearning.zendvn.com/api/get-gold')
.then(response => response.json())  // trả về json và parse ra
.then(priceGolds => console.log(priceGolds)) // []
  .catch(err => console.log('Lỗi rồi!'))

//Note: 
// Kiểm tra URL ok(200) -> F12 trên web page -> Network -> Fetch/XHR
// Khi URL ko hợp lệ thì trả về lỗi, dùng catch kiểm tra trên console log


// Exercise 1: http://apiforlearning.zendvn.com/api/get-gold -> đổ ra data

// fetch('http://apiforlearning.zendvn.com/api/get-gold')
// .then(response => response.json())  // trả về json và parse ra
// .then(priceGolds => {
    // render giao diện
//     let xHTML = '';
//     priceGolds.forEach(priceGold => {
//         xHTML += `
//          <tr>
//          <td>${priceGold.type}</td>
//          <td>${priceGold.buy}</td>
//          <td>${priceGold.sell}</td>
//         </tr>`
//     });
//     return document.getElementById('gold').innerHTML = '<tr><th>Type</th><th>Buy</th><th>Sell</th></tr>' + xHTML;
// });

// Buổi 27: Làm bài tập lớp

// Buổi 28:
// Thư viện Json-server: giúp tạo ra fake API (mock API)
// HTTP Protocol: 
//   Các phương thức thường dùng: get, post, put, delete
//   Đầu lỗi thường gặp: 4xx, 5xx


