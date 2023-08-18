/** Buổi 20: HTML DOM
 * With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
 * JS không thuộc HTML Dom
 * JS là ngôn ngữ lập trình, chạy trên browser (FE), server(BE-NodeJS)
 * HTML DOM là quy chuẩn của W3C đưa ra để làm việc với HTML
 *  Browser: có HTML, CSS --> DOM --> Web API
 *  JS: cung cấp bộ công cụ để làm việc vs Dom
 *  Từ Document đi tới -->
 *  Có 3 thành phần:
 *  Element: id, classname, tagname (tên thẻ), css selector, HTML collection (gọi nhanh, senior dùng)
 *     class, tagname --> trả về HTML Collection (mảng)
 *     css selector --> trả về NodeList (mảng)
 *  Attribute
 *  Text
 */

// let heading = document.getElementById('heading')
// console.log(heading);

// let heading = document.getElementsByClassName('heading') // tạo ra HTML Collection gồm các nút giao node, là 1 mảng
// console.log(heading[0]);  // gọi tới phần tử mảng, vòng lặp lấy giá trị mảng

// let tag = document.getElementsByTagName('p') // tạo ra HTML Collection gồm các nút giao node, là 1 mảng
// console.log(tag); // gọi tới phần tử mảng, vòng lặp lấy giá trị mảng

// let heading = document.querySelectorAll('.heading') //truyền class nên có dấu chấm
// console.log(heading);
// console.log(heading[0]);

// let para = document.querySelector('.para') // tạo ra 1 NodeList
// console.log(para);

// console.log(document.querySelector('#formLogin'));

//HTML Collection
// console.log(document.anchors);
// console.log(document.forms.formLogin); // có thể lấy theo index nhưng ko khuyến khích

// BT: Dùng css selector 
/* <div id="box">
<h1 class="heading">STUDY JS</h1> // output
</div>
<div id="box1">
<h1 class="heading">STUDY JS 1</h1>
<h1 class="heading">STUDY JS 2</h1>
</div> */

// let boxHeading = document.querySelector('#box').querySelector('.heading') // đi từng cấp
// console.log(boxHeading);

// let boxHeading1 = document.getElementsByClassName('heading')[0]
// console.log(boxHeading1);

// BT:
// Cho trước file HTML, các bạn hãy sử dụng các phương thức truy vấn đến các element trong DOM được học ở bài trước để lấy ra các element sau:

//  <div class="products-list">
//         <div class="product">
//             <h3 class="title">Khóa học HTML & CSS Pro</h3>
//             <p class="description">Cung cấp kiến thức từ cơ bản đến nâng cao về HTML & CSS</p>
//             <button class="cta-btn">Mua ngay</button>    
//         <div>
//         <div class="product">
//             <h3 class="title">Khóa học Javascript Pro</h3>
//             <p class="description">Cung cấp kiến thức từ cơ bản đến nâng cao về Javascript</p>
//             <button class="cta-btn">Mua ngay</button>    
//         <div>
//     </div>

// productsListElement: thẻ div có class là products-list.
// firstProductElement: thẻ div đầu tiên có class là product.
// buttonElements: tất cả các thẻ button.

// let productsListElement = document.getElementsByClassName('products-list')[0]  // dù mảng chỉ có 1 phần tử thì vận phải gọi index
// console.log(productsListElement);

// let firstProductElement = document.getElementsByClassName('product')[0]
// console.log(firstProductElement);

// let buttonElements = document.getElementsByTagName('button')
// console.log(buttonElements);

// BT:
/* <div class="box_1">
    <ul>
      <li>Tra cứu</li>
      <li>Tìm kiếm</li>
    </ul>
  </div>
  <div class="box_2">
    <ul>
      <li>Thế giới</li>
      <li>Thể thao</li>
    </ul>
  </div> */
// VD1: lấy hết các li trong box_1

// VD2: lấy element box_1 thực hiện cv 1
// 	lấy các element li trong box_1 thực hiện cv 2

// let liBox1 = document.querySelectorAll('.box_1')[0].querySelectorAll('li')
// console.log(liBox1);

// let elementBox1 = document.getElementsByClassName('box_1')
// console.log(elementBox1);

// let elementLiBox1 = document.getElementsByClassName('box_1')[0].getElementsByTagName('li')
// console.log(elementLiBox1);

// Attribute:
// let headingElement = document.querySelector('h1') // querySelector trả về 1 đối tượng nên ko cần [0], nếu All thì cần
// Gán thêm attribute hợp lệ  
// headingElement.title = 'heading'; // thêm thuộc tính tương tự object
// headingElement.className = 'heading';

// Lấy attribute hợp lệ  
// console.log(headingElement.title);  // mỗi element là 1 object -> lấy thuộc tính obj thì chấm tới nó
// console.log(headingElement.className);
// console.log(headingElement);

// Gán thêm Attribute Ko hợp lệ: ví dụ gán thuộc tính href cho thẻ H1
// headingElement.setAttribute('href','heading@')

// Lấy Attribute ko hợp lệ 
// console.log(headingElement.getAttribute('href')); // output: heading@

// BT:
/* <h1>Học lập trình để đi làm</h1>
    <p>Truy cập <a>nestech.edu.vn</a> để học lập trình các bạn nhé!!!</p>

Thêm thuộc tính title có giá trị " Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính data-title có giá trị "Học lập trình" cho thẻ h1.
Thêm thuộc tính href có giá trị "https://nestech.edu.vn/" cho thẻ a.
Thêm thuộc tính target có giá trị "_blank" cho thẻ a. */

// let addAttriH1 = document.getElementsByTagName('h1')[3]
// console.log(addAttriH1);
// addAttriH1.title = 'Học lập trình để đi làm';
// addAttriH1.setAttribute('data-title','Học lập trình')

// let addAttriA1 = document.getElementsByTagName('a')[0]
// console.log(addAttriA1);
// addAttriA1.href = 'https://nestech.edu.vn/'
// addAttriA1.setAttribute('target','_blank')

// Text: innerText, textContent
// Lấy
// console.log(addAttriH1.innerText); // chỉ lấy đúng text
// console.log(addAttriH1.textContent); // lấy đúng giá trị thực
// Thay đổi
// addAttriH1.innerText = `

// Study NodeJS` // lấy khoảng trắng
// addAttriH1.textContent = `

// Study NodeJS` // xoá khoảng trắng

// BT
/* <h1 class="heading">Nestech</h1>
Các bạn hãy thay đổi nội dung của thẻ h1 thành Nestech - Học lập trình để đi làm */

// let heading = document.getElementsByClassName('heading')[3]
// console.log(heading);
// heading.innerText = 'Nestech - Học lập trình để đi làm'

// Dom Nodelist: innerHTML, outerHTML
// Lấy
// let node = document.getElementsByTagName('div')[7]
// console.log(node);

// console.log(node.innerHTML); // chỉ lấy thẻ h1
// console.log(node.outerHTML); // lấy cả thẻ div và h1

// Thay đổi
// node.innerHTML = '<h1>Study JS</h1>' // thay đổi bên trong thẻ div
// node.outerHTML = '<h1>Study JS</h1>' // thay đổi bên ngoài và đè mất thẻ div

// BT
/* <ul></ul>
Các bạn hãy viết hàm render nhận vào 1 tham số là html, hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trướ
// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `) */

// let arrCourse = ['HTML','JS','PHP'];
// const render = (arr) => {
//   let ul = document.getElementsByTagName('ul')[2]
//   let xHTML = ''
//   arr.forEach(value => {
//     xHTML += '<li>Khóa học ' + value + '</li>' // dùng += vì for each mỗi lần đi qua từng giá trị trong arr sẽ trả về kết quả, nếu = thì chỉ trả về kết quả cuôi cùng
//     // xHTML += `<li>Khóa học ${value}</li>` 
//   });
//     return ul.innerHTML = xHTML
// }
// console.log(render(arrCourse));

// // BT
// let goldPrice = [
//   {
//     "buy": "65.800",
//     "sell": "66.600",
//     "type": "Vàng SJC 1L - 10L"
//   },
//   {
//     "buy": "52.950",
//     "sell": "53.950",
//     "type": "Vàng nhẫn SJC 99,99 1 chỉ, 2 chỉ, 5 chỉ"
//   },
//   {
//     "buy": "52.950",
//     "sell": "54.050",
//     "type": "Vàng nhẫn SJC 99,99 0,5 chỉ"
//   },
//   {
//     "buy": "52.750",
//     "sell": "53.550",
//     "type": "Vàng nữ trang 99,99%"
//   },
//   {
//     "buy": "51.720",
//     "sell": "53.020",
//     "type": "Vàng nữ trang 99%"
//   },
//   {
//     "buy": "38.317",
//     "sell": "40.317",
//     "type": "Vàng nữ trang 75%"
//   },
//   {
//     "buy": "29.373",
//     "sell": "31.373",
//     "type": "Vàng nữ trang 58,3%"
//   },
//   {
//     "buy": "20.483",
//     "sell": "22.483",
//     "type": "Vàng nữ trang 41,7%"
//   }
// ]

// const updatePrice = (arr) => {
//   let xHTML = ''
//   let tableElement = document.getElementById('gold')
//   arr.forEach(value => {
//      xHTML +=  `<tr>
//      <td>${value.type}</td>
//      <td>${value.buy}</td>
//      <td>${value.buy}</td>
//    </tr>`
//   })
//   return tableElement.innerHTML = xHTML
// }
// console.log(updatePrice(goldPrice));

// Buổi 21:
// // BT: // Viết func đổ bảng giá coin ra màn hình cho người dùng
// const coin = [
//   {
//     "id": 1,
//     "name": "Bitcoin",
//     "price": 19340.953647943366,
//     "percent_change_24h": 3.18974865,
//     "percent_change_1h": 0.13874144
//   },
//   {
//     "id": 1027,
//     "name": "Ethereum",
//     "price": 1319.766681320235,
//     "percent_change_24h": 3.07108724,
//     "percent_change_1h": 0.09324792
//   },
//   {
//     "id": 825,
//     "name": "Tether",
//     "price": 1.0000356256544913,
//     "percent_change_24h": 0.00616275,
//     "percent_change_1h": -0.00081655
//   },
//   {
//     "id": 3408,
//     "name": "USD Coin",
//     "price": 0.9999707419817206,
//     "percent_change_24h": -0.01333926,
//     "percent_change_1h": 0.00731704
//   },
//   {
//     "id": 1839,
//     "name": "BNB",
//     "price": 280.4971307183375,
//     "percent_change_24h": 3.86797039,
//     "percent_change_1h": -0.07656999
//   },
//   {
//     "id": 52,
//     "name": "XRP",
//     "price": 0.4378728623269723,
//     "percent_change_24h": 3.59775661,
//     "percent_change_1h": 0.24123988
//   },
//   {
//     "id": 4687,
//     "name": "Binance USD",
//     "price": 0.9998212428351202,
//     "percent_change_24h": -0.04704566,
//     "percent_change_1h": 0.03799726
//   },
//   {
//     "id": 2010,
//     "name": "Cardano",
//     "price": 0.43205242562096685,
//     "percent_change_24h": 0.46973443,
//     "percent_change_1h": -0.0513443
//   },
//   {
//     "id": 5426,
//     "name": "Solana",
//     "price": 33.29481291691432,
//     "percent_change_24h": 3.62047747,
//     "percent_change_1h": -0.06248286
//   },
//   {
//     "id": 74,
//     "name": "Dogecoin",
//     "price": 0.06011837389674329,
//     "percent_change_24h": 0.9993402,
//     "percent_change_1h": -0.16297579
//   }
// ]


// const updateCoin = (arr) => {
//   let tableElement = document.getElementById('coin')
//   let xHTML = ''
//   arr.forEach(value => {
//     let price = value.price.toFixed(2);
//     let change_24h = value.percent_change_24h.toFixed(2);
//     let change_1h = value.percent_change_1h.toFixed(2)
//     xHTML += ` 
//     <tr>
//     <td>${value.name}</td>
//     <td>${price}</td>
//     <td>${change_24h}</td>
//     <td>${change_1h}</td>
//   </tr>`
//   })
//   return tableElement.innerHTML = xHTML
// }
// console.log(updateCoin(coin));

// BT: Viết funx đổ data menu
let menuData = [
      {
        "id": "1",
        "name": "Thế Giới"
      },
      {
        "id": "2",
        "name": "Thể Thao"
      },
      {
        "id": "3",
        "name": "Thời Sự"
      },
      {
        "id": "4",
        "name": "Bóng Đá"
      },
      {
        "id": "5",
        "name": "Xã Hội"
      },
      {
        "id": "6",
        "name": "Tin Tức"
      },
      {
        "id": "7",
        "name": "Bất Động Sản"
      },
      {
        "id": "8",
        "name": "Thị Trường"
      }
    ]

// const updateMenu = (arr) => {
//   let element = document.getElementById('menu');
//   let xHTML = '';
//   arr.forEach(value => {
//     xHTML += `<li>${value.name}</li>`
//   })
//   return element.innerHTML = `<ul>${xHTML}</ul>`
// }
// console.log(updateMenu(menuData));

// Buổi 22
// Dom CSS:
// let boxElement = document.getElementById('box')
// console.log(boxElement);
// // boxElement.style.width = '10vw';
// // boxElement.style.height = '20px';
// // boxElement.style.backgroundColor = 'red';

// Object.assign(boxElement.style,{
//   width: '100vw',
//   height:'20px',
//   backgroundColor:'red'
// })

// classList & DOM Event
/** ClassList: các phương thức
 * length
 * value
 * add
 * remove
 * contains
 * toggle
*/ 
// let boxElement = document.querySelector('.box');
// console.log(boxElement.classList);
// console.log(boxElement.classList.length);
// console.log(boxElement.classList.value); // trả về giá trị
// boxElement.classList.add('box-2')
// boxElement.classList.remove('box-2')
// isTrue = boxElement.classList.contains('box2') // check if a class value exists or not, output là booleen true/false
// console.log(isTrue); 
// setInterval(() => {
//   boxElement.classList.toggle('box-2') // kiểm tra xem class value có tồn tại ko, có thì xoá đi, không thì thêm vào
// },1000)  // output: animation

// BT
// Thêm class title vào thẻ h1
// Thay thế class sub-title ở thẻ p bằng class content

// let setClassH1 = document.getElementsByTagName('h1')[0];
// setClassH1.classList.add('title')

// let replace = document.getElementsByTagName('p')[0];
// replace.classList.replace('sub-title','content')

// BT
// Cho trước file HTML có các thẻ div, các bạn hãy thêm class box vào các thẻ div này nhé.
// let classDiv = document.getElementsByTagName('div')
// console.log(classDiv);
// for (const value of classDiv) {
//   value.classList.add('box')
// }

/** Dom Event
 * Có 2 cách gán sự kiện
 * Gán như attribute thì thông qua this
 * thông qua method thì thông qua event
 */

// let boxElement = document.getElementsByTagName('div')[0]
// boxElement.onclick = function (e) {
//   console.log(e.target); //output: thẻ h1
// }

//Buổi 23
// BT1:
// Mô tả
// c1: Bắt sự kiện click của người dùng
// c2: lấy giá trị của box tương ứng
// c3: in giá trị ra cửa sổ console

// let elements = document.getElementsByClassName('box')
// for (const value of elements) {
//   value.onclick = (e) => {
//     console.log(value.innerText);
//   }
// }

//BT2
// Mô tả
// bắt sk click , change
// bắt trạng thái bóng đèn
// Thay đổi

// let lightElement = document.getElementsByClassName('image')[0]
// lightElement.onclick = () => {
//   if (lightElement.alt == 'turn_off') {
//     lightElement.src = 'turn-on.jpg'
//     lightElement.alt = 'turn_on'
//   }
//   else 
//   {
//     lightElement.src = 'turn-off.jpg'
//     lightElement.alt = 'turn_off'
//   }
// }

// BT3
// Mô tả 
// bắt vào sk click
// lấy giá trị của các ô input
// in giá trị xuống console
// bắt vào sk click submit

// let nameElement = document.getElementById('name')
// let emailElement = document.getElementById('email')
// let careerElement = document.getElementById('job')
// // let careerElement = document.querySelector('input[select]') // select là 1 dạng của input
// let submitElement = document.getElementById('btn-submit')

// submitElement.onclick = () => {
//   let name = nameElement.value
//   let email = emailElement.value
//   let career = careerElement.value
//   // console.log(name + email + career);
//   // lưu xuống Local
// let infor = {
//   name: name,
//   email: email,
//   career: career
// }
// localStorage.setItem('infor',JSON.stringify(infor)) // lưu cần đưa về string
// }

// BT4: Counter

// Buổi 24:
// BT5: 5-Tab
// BT6: 6-Tab (won't do)
// BT7: 7-Reading book

// Buổi 25:
// BT8: 8-calculator
// BT9: 9-scoreboard
// BT10: password

// Event Listener
// Khác với sự kiện onclick, blabla bắt sự kiện qua các thẻ HTML, thì addEventListener bắt sự kiện qua thẻ body
// --> tốn bộ nhớ hơn onclick
// Xử lý nhiều việc cùng lúc
// Thao tác thêm/huỷ sự kiện dễ dàng

// Ref: https://www.w3schools.com/jsref/met_document_addeventlistener.asp?gidzl=najo1marfqp2L7e10YgZIivJUWKPBwz6s0LnNa8igXtTKtDVHNsj58m6TLv2A_j1tW1n3sRvJ-nx3ZQfJm
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

//Ví dụ:
document.addEventListener('click',(e) => {console.log(e.target)}) // click vào element nào sẽ log dc element đó ra

// Ví dụ:
// let button = document.getElementsByTagName('button')[0];

// function viec1 () {
//   console.log('viec_1');  // Dom event sẽ thực hiện từng việc theo thứ tự
// }

// function viec2 () {
//   console.log('viec_2');  // Dom event sẽ thực hiện từng việc theo thứ tự
// }

// // // ADD EVENT LISTENER
// document.addEventListener('click',viec1) // thực hiện cùng 1 lúc
// document.addEventListener('click',viec2)  // thực hiện cùng 1 lúc

// // HUỶ EVENT LISTENER
// setTimeout(() => {
//   document.removeEventListener('click',viec2)
// },3000)

//Remove DOM EVENT JS (research)
















