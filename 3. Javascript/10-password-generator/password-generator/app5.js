let bar = document.getElementById('input-length')
let length = document.getElementById('length')

bar.oninput = () => {
        length.innerText = bar.value
    }  // dùng onclick, onchange, oninput đều dc

const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const SYMBOLS = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

// show pass đơn (arr) --> random
// show pass kép func(2arr) --> concat --> random
// show pass 3 (3arr) : --> concat --> randomn


// show pass đơn (arr) --> random
// show pass kép func(arr, option)  if (option= 2 true)--> concat --> random   if (option= 3 true) --> concat --> random

let result = document.getElementById('result');
let chooseNum = document.getElementById('checkbox-numbers');
let chooseLet = document.getElementById('checkbox-letters');
let chooseSym = document.getElementById('checkbox-symbols');
let generate = document.getElementById('btn-generate');
let stringNum = NUMBERS.concat(LETTERS)
let allStyle = stringNum.concat(SYMBOLS)

generate.onclick = () =>{
    if(!(chooseNum.checked || chooseLet.checked || chooseSym.checked)) {
        alert("You must check at least one checkbox")
        return
    }
    let xHTML = ''
    let tempArray = []
    if(chooseNum.checked) tempArray = tempArray.concat(NUMBERS);
    if(chooseLet.checked) tempArray = tempArray.concat(LETTERS);
    if(chooseSym.checked) tempArray = tempArray.concat(SYMBOLS);
    for (let index = 0; index < parseInt(length.innerText); index++) {
        xHTML += tempArray[Math.floor(Math.random()*tempArray.length)]
    }
    return result.innerText = xHTML;
}