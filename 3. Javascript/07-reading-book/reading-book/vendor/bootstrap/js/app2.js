// Bắt vào nút select --> lấy giá trị của nút select --> dom css cho nội dung
// Canh lề

let content = document.getElementById('content')
let align = document.getElementById('slb-text-align')

align.onclick = () => {
    content.style.textAlign = align.value
}

// Chiều cao dòng
let height = document.getElementById('slb-line-height')
height.onclick = () => {
    content.style.lineHeight = height.value + 'rem'  // height thì phải có đơn vị
}

// Màu nền
// let colors = document.getElementById('background-color').getElementsByTagName('button')
// for (const color of colors) {
//     color.onclick = () => {
//         content.style.backgroundColor = color.getAttribute('data-value')
//     }  
// }

  // Cách khác
// const background = document.querySelector("#background-color")
// for (let index = 1; index < background.children.length; index++) {
//     background.children[index].onclick = (e)=>{
//     // content.style.backgroundColor = e.target.getAttribute("data-value")
//     content.style.backgroundColor = e.target.dataset['value']
//    };
//  }

   // Cách khác
   const colorButton = document.querySelectorAll('.btn-background');
   const getContent = document.querySelector('#content');
   const changeColor = (element)=> {
       element.onclick = ()=> {
           getContent.style.backgroundColor = element.getAttribute('data-value');
           console.log(element.getAttribute('data-value'));
       };
       return;
   }   
   colorButton.forEach(element => {
       changeColor(element);
   });  // for each sẽ in ra tất cả nên cần viết function
  
// học thêm: https://stackoverflow.com/questions/71285038/get-element-by-dataset

// Size chữ
let desc = document.getElementById('btn-desc')
let asc = document.getElementById('btn-asc')
let computedFontSize = window.getComputedStyle(content).fontSize;  // F12 tab Computed, lấy ra giá trị là String
let fontSize = parseInt(computedFontSize)

asc.onclick = () => {
    content.style.fontSize = fontSize++ + 'px'
}
desc.onclick = () => {
    content.style.fontSize = fontSize-- + 'px'
}

    