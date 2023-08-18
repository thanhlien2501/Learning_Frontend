// BT4
// increase : bắt sự kiện vào nút increase --> lấy giá trị của ô number --> cộng giá trị ô number thêm 1 --> innertext
let numElement = document.getElementById('number')
let result = document.getElementById('saved-number')

let num = parseInt(numElement.innerText)
const increase = () => {
     num++
     numElement.innerText = num
}

const decrease = () => {
    if (num > 0 ) {
        num--
    }
    numElement.innerText = num
}

const save = () => {
   result.innerText = 'Save Numbers: ' + num
}