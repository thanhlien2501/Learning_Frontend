// 1 số hàm build-in trong JS:
// 1. alert
// 2. console
// 3. confirm
// 4. prompt
// 5. setTimeout
// 6. setInterval

// alert('Welcome đến với trang web của Elina')
// console.log('123')
// confirm('Bạn có thích trang web này không?')
// prompt('Cảm nhận của bạn về trang web này là : ')
// setTimeout(function () {
// alert('It is time to vote for me')
// }, 1000) //thực hiện 1 cv sau 1 khoảng time nhất định
// setInterval(function () {
//     alert('Remember to vote for me')
// },2000) //thực hiện 1 cv sau 1 khoảng time nhất định mang tính chu kỳ

// Khai báo biến trong JS: có 3 cách (pascal case, camel case, snake case) --> viết code thì nên chỉ dùng đồng nhất 1 file
// từ khoá tên biến = giá trị
// Từ khoá khai báo biến:
// Kiểu cũ: var
// ES6 --> let, const (const 1 biến chỉ dc khái báo 1 lần, không được trùng lặp)
// var >< let, const: phạm vi scope, hosting
// Ví dụ scope:
// if (true) {var number = 1}
// console.log(number);
//--> scope toàn cục, nêu ở đây dùng let, const thì chỗ log báo lỗi ngay
// hosting: var là khai báo trước sau gọi đều dc
// const >< var, let: assignment (gán giá trị)
// var number = 1;
//  number = 3;
//  console.log(number); //--> 3
// --> dùng const sẽ báo lỗi ngày

// pascal case: khai báo biến viết hoa chữ cái đầu
// var UserName = "Elina Su"
// alert(UserName);

//camel case: Phổ biến nhất, khai báo biến kiểu lạc đà ko viết hoa chữ cái đầu, và viết hoa các chữ cái sau nó 
// var userFullName 

// snake name: kiểu con rắn viết thuong hết và dùng dấu gạch nối
// var user_full_name

// Bài tập:
// var name = "Elian";
// var age = 28;
// console.log("Tên tôi là " + name + ". Năm nay tôi " + age + " tuổi.");

// 1 số hàm toán tử số học
// + --> cộng
// - --> trừ
// * --> nhân
// ** --> luỹ thừa
// / --> chia 
// % --> chia lấy dư (dư 0 --> số chẵn)
// ++ --> tăng 1 giá trị số
// -- --> giảm 1 giá trị số

// let ageNow = 15;
// let nextAge = ageNow + 11;
// console.log(nextAge);

// let a = 5;
// a++ // sao chép biến a, thực thi a + thêm 1
// console.log(a);

// ++a // thực thi lấy giá trị của biến + thêm 1
// console.log(a);

// let b = 8
// let result = ++b*3 - b--*2 = 9*3 - 9*2 = 9

/**
 * Toán tử gán 
 * Toán tử              Ví dụ               Tương đương
 *  =                   x = y               x = y
 *  +=                  x += y              x = x + y
 *  -=                  x -= y              x = x - y
 *  *=                  x *= y              x = x * y
 *  /=                  x /= y              x = x / y
 *  **=                 x **= y             x = x ** y
 */

// Bài tập 1
// let a = 10;
// let b = -12;
// let c = a + b;
// let d = a - b;
// console.log(c,d);

// Bài tập 2
// let name = "nguyễn";
// name += "  an";
// console.log(name);

// Nối chuỗi: 3 cách
// let fullName = "Nguyễn Chí    Nguyễn";
// console.log(fullName,' Chí');
// console.log(fullName + ' Chí');
// fullName += 123;
// console.log(typeof fullName);

// Bài tập 3:
// let firstName = "Liên";
// let lastName = "Tô";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

/**
 * Toán tử so sánh
 * == --> bằng (tương đối, tuyệt đối: ===)
 * != --> ko bằng (tương đối, tuyệt đối: !==)
 * > --> lớn hơn
 * < --> nhỏ hơn
 * >= --> lớn hơn hoặc bằng
 * <= --> nhỏ hơn hoặc bằng
 */

// Ví dụ
// let numberOne = 1;
// let numberTwo = 2;
// let result = numberOne == numberTwo;
// console.log(result);
// if (result) { //Điều kiện If chỉ nhận//sẽ chuyển đổi về 2 giá trị là True or False
//     console.log('Đúng');
// } else {
//     console.log('Sai');
// }

//Bài tập
// var a = 1;
// var b = -1;
// var c = 0;
// var d = 0;

// var e = a <= b;
// var f = c === d;
// var g = a >= c;

// console.log(e,f,g);
// -> output: false true true

//Kiểu dữ liệu Boolean
// true --> đúng
   // Chuỗi dữ liệu thì mặc định trả về true
// false --> sai
   /** 1 số giá trị luôn trả về false
    * 0
    * false
    * "" vs ''
    * null
    * NaN
    * undefine
    */

//Bài tập:
// let age = 28;
// let allow = 18;
// let canByAlcohol = age >= allow;
// console.log(canByAlcohol);
// if (canByAlcohol) {
//     console.log("Được phép mua rượu")
// } else {
//     console.log("Không được phép mua rượu")
// }

// Chuẩn ES6 quy định cách viết If else ngắn gọn hơn: Toán tử 3 ngôi (default tự console.log)
// () ? 'đúng' : 'sai'
// Ví dụ:
// let re = (0) ? 'đúng' : 'sai'
// console.log(re);

//Bài tập:
// let canDrink = (canByAlcohol) ? 'Được phép mua rượu' : 'Không được phép mua rượu'
// console.log(canDrink);

/**
 * Kiểu dữ liệu Object: will have properties and methods
 * let object_name = {key:'value',key:'value'}
 * access property: object_name.property_key
 * access method: object_name.method_name()
*/
// Ví dụ:
let student = {
    'name': 'minh',
    'age': 18,
    'birthday': '1/1/2023',
};
console.log(student.birthday); 

const person = {
   firstName: "John",
   lastName : "Doe",
   id       : 5566,
   fullName : function() {
     return this.firstName + " " + this.lastName;
   }
 };
 console.log(person.fullName());

// An array can hold many values under a single name, and you can access the values by referring to an index number (start with 0)
// let array_name = ['value1','value2']
// access array elements: array_name[index number]

let class_name = ['java', 'PHP', 'Python'];
console.log(class_name[1]);

/**
 * Hàm trong JS
 * 1. Hàm
 *   - là một khối mã
 *   - thực hiện 1 cv cụ thể
 * 2. Loại hàm
 *   - Hàm build-in
 *   - Hàm tự định nghĩa (trong hàm không nên dùng build-in nữa mà dùng return -> tốt performance)
 * 3. Tính chất
 *   - không thực thi khi định nghĩa
 *   - sẽ thực thi khi được gọi
 *   - có thể nhận tham số
 *   - có thể trả về 1 giá trị
 * 4. Tạo hàm:
 *   - Định nghĩa: function tên_hàm(parameter1, parameter2, parameter3) {code to be executed (1 khối mã làm 1 công việc cụ thể)} --> cách đặt tên hàm như đặt tên biến
 *   - Gọi hàm: tên_hàm()
 */

// Ví dụ:
//  function showDialog(){
//     alert('Xin chào các bạn');
//  }
//  showDialog();
 
//  Return trong hàm: không giới hạn kiểu dữ liệu
  function cong(a,b){
   return a+b;
}
// Khái báo biến để nhận giá trị
  let ketqua = cong(1,2);
  console.log(ketqua);

//  Tham số trong hàm
//  - Định nghĩa: 1 giá trị truyền vào func để tính toán or làm 1 việc gì đó, ko giới hạn kiểu dữ liệu --> có thể là 1 biến
function writelog (message) {
   console.log(message);
}
writelog('Chào bạn');
writelog('Hello');

// Cách định nghĩa hàm:
//      Declaration func
//      Expression func
//      Arrow func
 
//  Ví dụ gọi hàm:
 
//Declaration func: có thể gọi hàm trước rồi định nghĩa hàm
// function number(number_1, number_2){
//    return number_1 + number_2 // thực thi + trả về
// }
// let result = number(3,2);
// console.log(result);

// Expression func: ít dùng, phải định nghĩa xong mới dc gọi
// const result = function number (number_1,number_2){
//    return number_1 + number_2 //khai báo 1 biến là 1 hàm thì dùng const, có thể bỏ tên hàm number
// }
// console.log(result(2,5));

//Arrow func: chuẩn EC6, phải định nghĩa xong mới dc gọi
// const showNotify = () => {
//    alert('Chào bạn')
// }
// showNotify();

// Bài tập: Viết hàm tính tích với 2 số bất kỳ
// const mutiply = (number_1, number_2) => {
//    return number_1 * number_2;
// };
// console.log(mutiply(2,50));

// Bài tập: Viết hàm kiểm tra chẵn lẽ
// const check = (number_1) => {
//    if (number_1%2 == 0) {
//       return 'Số chẵn';  
//    } else {
//       return 'Số lẻ';
//    }
//    }
// console.log(check(3));

// Bài tập: Viết hàm kiểm tra 2 số nếu a > b output a là số lớn nhất và ngược lại
const result = (a,b) => {
   return (a>b) ? a : b;
};
console.log(result(3,5));

// Bài tập: Hàm tính luỹ thừa của 1 số bất kỳ
const luy_thua = (a,b) => {
   if (a==0) {return 0};
   if (b==0) {return 1};
   return a**b;
};
console.log(luy_thua(2,0));

// Bài tập: Hàm kiểm tra số bất kỳ là số âm hay dương
const am_duong = (a) => {
   if (a==0) {return 'Không âm, không dương'};
   return (a>0) ? 'Số dương':'Số âm';
};
console.log(am_duong(0));

// Sử dụng hàm trong các dạng dữ liệu khác nhau:
// Chuỗi dữ liệu: các cách khai báo chuỗi
let course = 'java php java';
let name1 = 'Tô Thanh Liên';
let number = '1234567890';
console.log(course);

let string = new String('hahah'); // hạn chế khai báo kiểu này khi làm JS
console.log(typeof string);

// Các methods phương thức:
// typeof: kiểm tra chuỗi dữ liệu
// length: kiểm tra độ dài của chuỗi
console.log(course.length);
// indexOf: tìm ra vị trí phần tử của chuỗi, tìm từ vị trí đầu tiên or có thể tự định nghĩa vị trí bắt đầu
console.log(course.indexOf('java',1));
// lastIndexOf: tìm từ vị tri cuối chuỗi
console.log(course.lastIndexOf('java'));
// slice: cắt ký tự trong chuỗi
console.log(course.slice(1,3));
// replace: hàm thay thế ký tự đầu tiên mà tìm thấy
// replaceAll: thay thế toàn bộ ký tự có trong chuỗi
console.log(course.replace('java','js'));
// toUpperCase, toLowerCase: chuyển toàn bộ thành hoá, thường
console.log(course.toUpperCase());
console.log(course.toLowerCase());
// trim: xoá khoảng trắng đầu và cuối chuỗi
console.log(course.trim().length);
// split: chuyển phần tử chuỗi thành mảng array dựa vào điều kiện cho trước
console.log(course.split(' '));
// chartAt: lấy ký tự
console.log(course.charAt(5));

// Bài tập:
// Viết hàm lấy độ dài của chuỗi
const do_dai = (string) => {
   return string.length;
}
console.log(do_dai('Nestech VN'));

// Viết hàm nếu chữ thường thành chữ hoa và ngược lại
const a = (str) => {
   return (str == str.toUpperCase()) ? str.toLowerCase() : str.toUpperCase();
}
console.log(a('LIÊN LIÊN'));

// Viết hàm tìm vị trí của chuỗi bất kì -> output: index('nguyen','y')
const position = (str, index) => {
   return str.indexOf(index);
}
console.log(position('nguyen van a','y'));

// Viết hàm xoá khoảng trắng 2 đầu
const space = (str) => {
   return str.trim();
}
console.log(space('    Haha    '));

/**
 * Kiểu dữ liệu số: Number
 * Methods:
 * typeof: kiểm tra kiểu dữ liệu
 * toString
 * toFixed
 * parseloat(): chuyển chuỗi thành số
 * isNaN(): kiểm tra có là số không
 */

let num = 2.6462; // --> true
// let num1 = num/'g' --> false (1 số chia cho 1 chuỗi thì ra NaN)
// let num2 = NaN --> false
console.log(typeof num.toString());
console.log(num.toFixed(2));

// Viết 1 hàm kiểm tra giá trị nhập vào là giá trị số
const check = (number) => {
   return (isNaN(number)) ? 'Không phải là số' : 'Là số';
}
console.log(check(-5));

/**
 * Kiểu dữ liệu mảng Array
 * Trong mảng có các kiểu dự liệu: string, number, object, function, array
 */
// let array = [1,'tên',{key:'hihi'},function () {},[1,2]];
// console.log(array);

// Các methods làm việc vs mảng
// typeof
// length
// toString: chuyển mảng thành chuỗi, ngăn cách bằng dấu ,
// join: chuyển mảng thành chuỗi, có thể truyền ký tự ngăn cách
let arr = [1,2,3,4];
// console.log(arr.toString()); // 1,2,3,4
// console.log(arr.join('-')); // 1-2-3-4
// pop: xoá phần tử cuối mảng và trả về phần tử bị xoá
// console.log(arr.pop());
// shift: xoá phần tử đầu mảng và trả về phần tử bị xoá
// console.log(arr.shift());
// console.log(arr);
// push: thêm phần tử vào cuối mảng 
// console.log(arr.push('Nguyen'));
// console.log(arr);
// unshift: thêm phần tử vào đầu mảng
// console.log(arr.unshift('Hôm nay','Mưa'));
// console.log(arr);
// splice: xoá và trả về các phần tử xoá là 1 mảng
          // chèn ở vị trí chỉ định
// console.log(arr.splice(1,2));
console.log(arr.splice(2,0,'Nguyen'));
console.log(arr);
// concat: nối mảng
// let arr1 = [2,3,'nguyen'];
// console.log(arr.concat(arr1));
// slice: lấy phần tử theo vị trí chỉ định
// console.log(arr.slice(1,2));
// console.log(arr[1]);

// bài tập:
// const joinWithCharacter = (array,charactor) => {
//    return array.join(charactor);
// };
// console.log(joinWithCharacter(['Honda','Mazda','Mercedes'],'-'));

// Bài tập:
let animals = ['Monkey','Tiger','Elephant'];
const getFirstElement = (animal) => {
   return animal[0];
}
console.log(getFirstElement(animals));
console.log(animals);

//Bài tập:
const getFirstElement1 = (animal) => {
   return animal.slice(-1);  //animal[animal.length-1]
}
console.log(getFirstElement1(animals));
console.log(animals);

/** Buổi 15
 * Kiểu dữ liệu Object: 2 loại: array và object
 * 1. Cách khai báo 1 object
 * 2. Cách thêm giá trị cho 1 object thông qua key, biến
 * 3. Cách lấy trị thông qua key, biến
 * let nameOject = {
 *    key: value,
 *    key1: value,
 * } --> Object
 *  
 * let array =['name1','name2'] --> Array
 */


let name = 'lastName';
let info = {
   lastName: 'Elina',
   age: 28,
   'cour-se': 'Fullstack',
   // [myEmail]: 'lien@gmail.com', // Thêm phần tử cho Object thông qua biến (thêm bên trong)
}

// info.time = '6 tháng';  // Thêm phần tử cho Object thông qua key
// info['family-name'] = 'Su'; // Thêm phần tử có định nghĩa key ko hợp lệ cho Object
// let myEmail = 'Email'; 
// info[myEmail] = 'lien@gmail.com'; // Thêm phần tử cho Object thông qua biến (thêm bên ngoài)

// console.log(info);
// console.log(info.age); //lấy giá trị qua key
// console.log(info['cour-se']); // lấy giá trị có key không hợp lệ
// console.log(info[name]); //lấy giá trị qua biến

// Bài tập:
let course1 = [
   backend = [{
      name: 'java',
      count: '5$',
   },
   {
      name: 'PHP',
      count: '5$',
   }],
   frontend = {
      name: 'reactjs',
   },
];

console.log(course1[0][0].name + "," + course1[1].name);

// Bài tập:
let course2 = {
   backend: [{
      name: 'java',
      count: '5$',
   },
   {
      name: 'PHP',
      count: '5$',
   }],
   frontend: {
      name: 'reactjs',
   },
};

console.log(course2.backend[1].name);

// 4. Lưu và lấy dữ liệu đối với Object:
localStorage.setItem('lastName','Elina'); // Lưu
console.log(localStorage.getItem('lastName'));  // lấy

localStorage.setItem('infoName',JSON.stringify(info)); // Lưu cả 1 object
console.log(JSON.parse(localStorage.getItem('infoName')));

//--> lưu xuống local storage là ko có lệnh sẵn xoá, muốn xoá tự viết extension hay là lưu bao nhiêu ngày tự động xoá

// 5. Đối tượng Date: --> ngày/tháng/năm/giờ
let date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
console.log(date.getHours());

//Bài tập: Khai báo 3 biến ngày, tháng, năm --> đưa vào object với giá trị của nó
let day = 'Day';
let month = 'Month';
let year = 'Year';
let today = {};
today[day] = date.getDate();
today[month] = date.getMonth()+1;
today[year] = date.getFullYear();
console.log(today);

// Bài tập: Viết function trả về năm tiếp theo
const nextYear = () => {
   return date.getFullYear()+1;
};
console.log(nextYear());

// 6. Đối tượng Math --> PI, round, ceil, floor, abs, random, min, max
console.log(Math.round(Math.PI)); // --> làm tròn
console.log(Math.ceil(3.2)); //--> làm tròn lên +1
console.log(Math.floor(3.9)); //--> làm tròn xuống -1
console.log(Math.abs(-3)); //--> láy giá trị tuyệt đối
console.log(Math.round(Math.random()*5)); //--> số 5 là khoá lại random đến số mấy
console.log((Math.min(1,2,13,5)));
console.log(Math.max(3,2,6));

// Bài tập: viết function gọi ngẫu nhiên trả về giá trị ngẫu nhiên từ 1 - 24
// let min = 1;
// let max = 24;
// const getRandom = (start,end) => {
//    return Math.floor(Math.random()*(max-min)) + min;
// }
// console.log(getRandom(min,max));

// Bài tập: Viết hàm mỗi lần quay trả về 1 giá trị
let phanThuong = [
   '1tr',
   '10tr',
   '50tr',
   '100tr',
];
const getReward = (phanThuong) => {
   return phanThuong[Math.floor(Math.random()*3)];
}
console.log(getReward(phanThuong));


let x = Math.floor(Math.random()*3);
console.log(phanThuong[x]);

/** Buổi 16
 * 1. Điều kiện:
 * If else, if else if else
 * Switch case: nếu có nhiều điều kiện
 * 2. Vòng lặp
 */

// Bài tập: Kiểm tra sự tinh tế
// func check số output checknumber(3) // số này chia hết cho 3
// func check số output checknumber(5) // số này chia hết cho 5
// func check số output checknumber(15) // số này chia hết cho 3 và 5

const checkNumber = (number) => {
   if (number%3 == 0 && number%5 == 0) {
      return 'số này chia hết cho 3 và 5'
   }
   else if (number%3 == 0) {
         return 'số này chia hết cho 3';
   }
   else if (number%5 == 0) {
      return 'số này chia hết cho 5';
   }
   else {
      return 'Số không chia hết cho 3 và/hoặc 5';
   }
   }
   console.log(checkNumber(16));

   let number1 = 2;
   switch (number1) {
      case 2:
         console.log('đây là số 2');
         break;
      case 3:
         console.log('đây là số 3');
         break;
      default: console.log('đây không phải là số');
   }

   // Bài tập:
   let day1 = date.getDay();
   switch (day1) {
      case 0:
         console.log('Hôm nay là chủ nhật');
         break;
      case 1:
         console.log('Hôm nay là thứ hai');
         break;
      case 2:
         console.log('Hôm nay là thứ ba');
         break;
      case 3:
         console.log('Hôm nay là thứ tư');
         break;
      case 4:
         console.log('Hôm nay là thứ năm');
         break;
      case 5:
         console.log('Hôm nay là thứ sáu');
         break;
      case 6:
         console.log('Hôm nay là thứ bảy');
         break;
      default: console.log('Không phải ngày trong tuần');
         break;
   }

// 2. Vòng lặp: if you want to run the same code over and over again, each time with a different value.
//Often this is the case when working with arrays

// for (let i=0; i<10; i++) {
//     console.log(i);
// }

// Bài tập: Kiểm tra số chia hết cho 2 từ 0 - 10
for (let i=0; i<=10; i+=2) {
   if (i%2 == 0) {
      console.log(i + ' là số chia hết cho 2'); 
   }
}

//Bài tập: tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max
//Mô tả:
// 1. Tạo function getRandNumbers
// 2. tạo array
// 3. Tìm được giá trị trong min và max
// 4. Đẩy giá trị vào trong array / gán giá trị arr[i] = math...
// 5. Trả về mảng

// const getRandNumbers = (min,max,length) => {
//    let arr = [];
//    for (let i = 0; i < length; i++) { // vòng lặp chạy 6 lần từ 0 và 5
//       let random = Math.round(Math.random()*(max-min)) + min // random là đi từ 0 đến 10 (max-min)
//       arr.push(random)
//    }
//    return arr
//    }
// console.log(getRandNumbers(10,20,6));

let arr1 = [
   'JAVA',
   'PHP',
   'PYTHON',
   'NODEJS',
   'REACT',
]
// let length = arr.length;
// for (let i = 0; i < length; i++) {
//    console.log('i',i);
//    console.log(arr1[i]);
// }

// Bài tập: Viết 1 function tinh tổng các phần tử trong mảng: getTotal([4,5,3,5]) //outpu: 17
// 1. Tạo function nhận arr
// 2. Tạo biến để chứa tổng
// 3. vòng lặp
// 4. lấy từng giá trị của mảng
// 5. cộng từng giá trị

const getTotal = (arr) => {
   let total = 0;
   let length = arr.length
   for (let index = 0; index < length; index++) {
      total += arr[index]
   }
   return total
}
console.log(getTotal([4,5,3,5]));

// for in: ở object ta lấy dc key là tên các thuộc tính, ở array ta lấy dc key là 0,1,2..

let info1 = {
   name: 'Elina',
   age: '18',
   class: 'FS18',
}

for (const key in info1) {
   console.log(key); 
   }

let info2 = [
   'Elina',
   '18',
   'FS18',
]
for (const key in info2) {
      console.log(info2[key]); 
   }

// Viết func lấy giá trị object // output: 'Elina''18''FS18'
const getInfo = (object) => {
   let result = '' // khai báo nhận về giá trị chuỗi
   for (const index in object) {
      result += object[index] + ' '
   }
   return result
   }
console.log(getInfo(info1));

/** Buổi 17
 * for of: lấy giá trị
 */

let arr2 = [
   'JAVA',
   'PHP',
   'PYTHON',
   'NODEJS',
   'REACT',
]
for (const value of arr2) {
   console.log(value);
}

let info3 = {  // object phải chuyển thành array
   name: 'Elina',
   age: '18',
   class: 'FS18',
}
console.log(Object.keys(info3)); // chuyển object thành array theo key
for (const val of Object.keys(info3)) {
   console.log(info3[val]);
}

console.log(Object.values(info3)); // chuyển object thành array theo value
for (const val of Object.values(info3)) {
   console.log(val);
}

// Bài tập: Sử dụng for of tính tổng tiền khoá học
let courses = [
   {
       id: 1,
       name: 'PHP',
       coin: 500,

   },
   {
       id: 2,
       name: 'Reactjs',
       coin: 200,

   },
   {
       id: 3,
       name: 'NodeJs',
       coin: 100
   },
   {
       id: 4,
       name: 'JS',
       coin: 300
   },
   {
       id: 5,
       name: 'Java',
       coin: 250
   },
]
console.log(courses);

let total = 0;
for (const value of courses) {
   total += value.coin
}
console.log(total);

// Bài tập: Viêt hàm run
// console.log(run({name:'Nguyen Van A', age: 16}));
// Output:  // cần array thì khai báo array để trả về kết quả cho nó
// [
// "Thuộc tính name có giá trị Nguyen Van A",
// "Thuộc tính age có giá trị 16"
// ]

let output = [];
let run = (obj) => {
   for (const key of Object.keys(obj)) {
      output.push('Thuộc tính ' + key  + ' có giá trị ' + obj[key])
    }
    return output
}
console.log(run({name:'Nguyen Van A', age: 16}));

// Bài tập:
var orders = [
   {
      name: 'Khoá học HTML - CSS Pro',
      price: 30000000
   },
   {
      name: 'Khoá học Javascript Pro',
      price: 25000000
   },
   {
      name: 'Khoá học React Pro',
      price: 32000000
   }
]
// Output: [tên các khoá học]

let output1 = [];
let courses_name = (arr) => {
  for (const val of arr) {
     output1.push(val.name)  
  }
   return output1
}
console.log(courses_name(orders));

let output2 = [];
let courses_name2 = (arr) => {
  for (const index in arr) {
     output2.push(arr[index].name)  
  }
   return output2
}
console.log(courses_name2(orders));

/**
 * Vòng lặp while, do - while  --> 2 vòng lặp ít dùng, thường dùng trong cty điện lực, xổ số, vietlot
 */

// vòng lặp while: chú ý vị trí đặt biến chạy kết quả sẽ khác nhau
let i = 0 // khai báo i bắt đầu chạy từ đâu
while (i<10) {  // điều kiện dừng
   i++
   console.log(i);
} // --> output: 1,2,...,10

let i1 = 0 
while (i1<10) { 
   console.log(i1);
   i1++
} // --> output: 0,1,2,...,9

// Vòng lặp Do-while
// do {
//    console.log(i);
//    i++
// } while (i<10);

// do {
//    i++
//    console.log(i);
// } while (i<10);

// Ôn tập
const fruits = ['Banana','Orange','Lemon','Apple','Mango'];
// citrus contains ['Lemon']
console.log(fruits.splice(2,1));

/** Phương thức nâng cao của mảng
 * forEach: không cần return
 */
let courses1 = [
   {
       id: 1,
       name: 'PHP',
       coin: 100,

   },
   {
       id: 2,
       name: 'Reactjs',
       coin: 0,

   },
   {
       id: 3,
       name: 'NodeJs',
       coin: 100
   },
   {
       id: 4,
       name: 'JS',
       coin: 0
   },
   {
       id: 5,
       name: 'NodeJs',
       coin: 250
   },
]

courses1.forEach((course) => {
    console.log(course);
});

courses1.forEach((course, index) => { // lấy value, index
   console.log(index);
   console.log(course);
});

// every: vs 1 điều kiện cho trước mà chạy gặp false thì ngừng và trả về False, giá trị trả về là True hoặc False

let result1 = courses1.every((course) => {
   return course.coin === 0
})
console.log(result1);

// some: vs đk cho trước chỉ cần có 1 cái true thì trả về true
let result2 = courses1.some((course) => {
   return course.coin === 0
})
console.log(result2);

// find: tìm kiếm vs 1 đk cho trước, và trả về giá trị đầu tiên cho thấy
let result3 = courses1.find((course) => {
   return course.name === 'NodeJs'
})
console.log(result3);

// filter: tìm kiếm vs 1 đk cho trước, và trả về 1 mảng all giá trị thoả điều kiện cho trước
let result4 = courses1.filter((course) => {
   return course.name === 'NodeJs'
})
console.log(result4);

// Bài tập: Viết func
const inventory = [
   {name: 'apples', quantity: '2'},
   {name: 'bananas', quantity: '0'},
   {name: 'cherries', quantity: '5'}
]
//output
// console.log(inventory.find(isCherries));
// {name: 'cherries', quantity: '5'}

let find = inventory.find((inven) => {
   return inven.name == 'cherries'
})
console.log(find);

// Bài tập:
const arraySparse = [1,3, '' ,7]; // mảng có 4 phần tử trong đó có 1 phần tử rỗng
// output
// {element: 1}
// {element: 3}
// {element: 7}
// {numCallbackRuns: 3}

let sparse = arraySparse.forEach((value,index) => {
   console.log({element: value});
})

/** Buổi 18
 * Map: duyệt qua mảng và tạo ra mảng mới có số phần tử như cũ theo ý mình -< dùng nhiều để đổ ra menu, category, danh sách
 */

let courses2 = [
   {
       id: 1,
       name: 'PHP',
       coin: 100,

   },
   {
       id: 2,
       name: 'Reactjs',
       coin: 200,

   },
   {
       id: 3,
       name: 'NodeJs',
       coin: 300
   },
   {
       id: 4,
       name: 'JS',
       coin: 150
   },
   {
       id: 5,
       name: 'Java',
       coin: 180
   },
   {
       id: 6,
       name: 'NodeJs',
       coin: 350
  },
]

const handleCourse = (course,index,originalarr) => {
   return {
      id: course.id,
      name: 'Khoá học ' + course.name,
      coin: course.coin,
      price: 'giá khoá học ' + course.coin
   }
}
let newCourse = courses2.map(handleCourse)  //callback là func
console.log(newCourse);


const handleCourse1 = (course,index,originalarr) => {
   return '<h1>' + course.name + '</h1>'
}
let newCourse1 = courses2.map(handleCourse1) 
console.log(newCourse1);
console.log(newCourse1.join(''));


// reduce: trả về 4 giá trị, thường dùng 2 giá trị đầu
// Mục đích: tính total or trả về mảng
// tương tự for of: có 3 bước, gọn hơn
// B1. Khai báo biến lưu trữ -> initialValue: giá trị lưu trữ ban đầu,không truyền thì lấy giá trị 1st của array
// B2. Thực hiện việc lưu trữ
// B3. Trả về biến lưu trữ
// accumulator: giá trị ban đầu (dùng trong tính tổng)
const handleCourse2 = (accumulator, currentValue, currentIndex,originalarr) =>{
     return accumulator + currentValue.coin
   };
let newCourse3 = courses2.reduce(handleCourse2,0) // callback, intialValue
console.log(newCourse3);

// Cách viết gọn:
let newCourse4 = courses2.reduce((a,b) => a+b.coin,0)
console.log(newCourse4);

// Bài tập: Thay vì dùng vòng lặp thì dùng các phương thức nâng cao của array
var sports = [
   {
       name: 'Bơi lội',
       gold: 11
   },
   {
       name: 'Boxing',
       gold: 3
   },
   {
       name: 'Đạp xe',
       gold: 4
   },
   {
       name: 'Đấu kiếm',
       gold: 5
   },
]
// Output: 23

let sport = (previousValue,currentValue) => {
   return previousValue + currentValue.gold
};
let totalSports = sports.reduce(sport,0)
console.log(totalSports);

// Bài tập: Viết func
const sports1 = [
   {
       name: 'Bóng rổ',
       like: 6
   },
   {
       name: 'Bơi lội',
       like: 5
   },
   {
       name: 'Bóng đá',
       like: 10
   },
]
// console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

let sport1 = [];
let getMostFavoriteSport = (arr) => {
   arr.filter((value) => {
      if (value.name != 'Bơi lội') {
         sport1.push(value)
      }})
   return sport1 }
console.log(getMostFavoriteSport(sports1));

// Bài tập:
var watchList = [
   {
     "Title": "Inception",
     "Year": "2010",
     "Rated": "PG-13",
     "Released": "16 Jul 2010",
     "Runtime": "148 min",
     "Genre": "Action, Adventure, Crime",
     "Director": "Christopher Nolan",
     "Writer": "Christopher Nolan",
     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
     "Language": "English, Japanese, French",
     "Country": "USA, UK",
     "imdbRating": "8.8",
     "imdbVotes": "1,446,708",
     "imdbID": "tt1375666",
     "Type": "movie",
   },
   {
     "Title": "Interstellar",
     "Year": "2014",
     "Rated": "PG-13",
     "Released": "07 Nov 2014",
     "Runtime": "169 min",
     "Genre": "Adventure, Drama, Sci-Fi",
     "Director": "Christopher Nolan",
     "Writer": "Jonathan Nolan, Christopher Nolan",
     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
     "Language": "English",
     "Country": "USA, UK",
     "imdbRating": "8.6",
     "imdbVotes": "910,366",
     "imdbID": "tt0816692",
     "Type": "movie",
   },
   {
     "Title": "The Dark Knight",
     "Year": "2008",
     "Rated": "PG-13",
     "Released": "18 Jul 2008",
     "Runtime": "152 min",
     "Genre": "Action, Adventure, Crime",
     "Director": "Christopher Nolan",
     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
     "Language": "English, Mandarin",
     "Country": "USA, UK",
     "imdbRating": "9.0",
     "imdbVotes": "1,652,832",
     "imdbID": "tt0468569",
     "Type": "movie",
   },
   {
     "Title": "Batman Begins",
     "Year": "2005",
     "Rated": "PG-13",
     "Released": "15 Jun 2005",
     "Runtime": "140 min",
     "Genre": "Action, Adventure",
     "Director": "Christopher Nolan",
     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
     "Language": "English, Urdu, Mandarin",
     "Country": "USA, UK",
     "imdbRating": "8.3",
     "imdbVotes": "972,584",
     "imdbID": "tt0372784",
     "Type": "movie",
   },
   {
     "Title": "Avatar",
     "Year": "2009",
     "Rated": "PG-13",
     "Released": "18 Dec 2009",
     "Runtime": "162 min",
     "Genre": "Action, Adventure, Fantasy",
     "Director": "James Cameron",
     "Writer": "James Cameron",
     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
     "Language": "English, Spanish",
     "Country": "USA, UK",
     "imdbRating": "7.9",
     "imdbVotes": "876,575",
     "imdbID": "tt0499549",
     "Type": "movie",
   }
 ];
 // Expected results: avr rating of director Christopher Nolan
 // console.log(calculateRating(watchList)); // Output: 8.675
 
// 1. tổng
// 2. count
// 3. gọi func
//4. điều kiện

let sum = 0;;
let count = 0
const calculateRating = (arr) => {
   arr.filter((value) => {
      if (value['Director'] === 'Christopher Nolan') {
         sum += parseFloat(value['imdbRating'])
         count++
      }
   })
   return sum/count
}
console.log(calculateRating(watchList));

// Bài tập:
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// Expected output: Array ["exuberant", "destruction", "present"]
const childWords = (arr) => {
   return arr.splice(3,3)
}
console.log(childWords(words));

/** Buổi 19 */
// BT1: Viết func
const months = ['Jan','Feb','April','June'];
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

const newMonths = (arr,a,b,c) => {
   arr.splice(a,b,c)
   return arr
}
console.log(newMonths(months,2,0,'March'));

// BT2: Viết func
const a1 = ["Wind", "Water", "Fire"];
// 'Wind + Water + Fire'
//Cách 1:
const output3 = (arr,plus) => {
   return arr.join(plus)
}
console.log(output3(a1,' + '));
//Cách 2: dùng trong trường hợp phần tử mảng bất đồng bộ
const output4 = (arr)=>{
   let temp = ''
   for (const iterator in arr) {
       temp += arr[iterator]
           if(iterator<arr.length-1) temp += " + "  
   }
   return temp
}
console.log(output4(a1));

// BT3: Viết func
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// Expected output: "tomato"

// const output5 = (arr) => {
//    return arr.pop() //slice, splice
// }
// console.log(output5(plants));

const output6 = plants.find(value => {
   return value === 'tomato'
})
console.log(output6);

// BT4: Viết func
const animals1 = ['pigs', 'goats', 'sheep'];
 // ['pigs', 'goats', 'sheep', 'football', 'swimming']

const output7 = (arr, a, b) => {
   arr.push(a,b)
   return arr
}
console.log(output7(animals1,'football', 'swimming'));

// BT5: Viết func
const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];
//  "Andrew"

// const output8 = (arr) => {
//    return arr.shift()
// }
// console.log(output8(names));

const output9 = names.find(value => value === 'Andrew')
console.log(output9);

// BT6:
const filtered = [12, 5, 8, 130, 44]
// filtered is [12, 130, 44]

// const output10 = (arr,a,b) => {
//    arr.splice(a,b)
//    return arr
// }
// console.log(output10(filtered,1,2));

const filterNum = (arr) => {
   let temp = [];
   arr.map(value => {
       if(value >= 10) temp.push(value);
   }); 
   return temp;
}
console.log(filterNum(filtered));

// BT7: viết func
const inventory1 = [
   { name: "apples", quantity: 2 },
   { name: "bananas", quantity: 0 },
   { name: "cherries", quantity: 5 },
 ];
 // { name: 'cherries', quantity: 5 }

const output11 = inventory1.find(value => value.name === 'cherries')
console.log(output11);

// BT8:
// Expected results:
var arr3 = [
   ['name', 'La Minh'],
   ['age', 18],
];
// console.log(arrToObj(arr)); // { name: 'La Minh', age: 18 }

const arrToObj = (arr) => {
   let obj = {}
   for (const value of arr) {
      obj[value[0]] = value[1]
   }
   return obj // chú ý
}
console.log(arrToObj(arr3))

// BT9: viết func tăng giá trị mảng theo mong muốn
const array1 = [1, 4, 9, 16];

const output13 = (arr) => {
   let x = arr.map(value => value * 4)
   return x
}
console.log(output13(array1)); //output const array1 = [4, 16, 36, 64];

// BT10:
const numbers = [1, 4, 9];

const output14 = (arr) => {
   let x = arr.map(value => Math.sqrt(value))
   return x
}
console.log(output14(numbers));//output [1, 2, 3];

// BT11: viết func tính tổng các ptu
const array2 = [1, 2, 3, 4];

const output15 = (arr) => {
   let x = arr.reduce((previousValue,currentValue) => previousValue + currentValue)
   return x
}
console.log(output15(array2)); // output: 10

// BT12:
const arraySparse1 = [1, 3, /* empty */, 7];
// output:
// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }

const output16 = (arr) => {
   arr.splice(2,1)
   let x = []
   for (const value of arr) {
      x.push({element: value})
   }
      x.push({numCallbackRuns: arr.length})
   return x
}
console.log(output16(arraySparse1));

// BT13:
let depthArray = [1, 2, [3,4], 5, 6, [ 7, 8, 9]];
// output [1,2,3,4,5,6,7,8,9];

const output17 = (arr) => {
   return arr.flat()
   }
console.log(output17(depthArray));  // làm phẳng mảng
