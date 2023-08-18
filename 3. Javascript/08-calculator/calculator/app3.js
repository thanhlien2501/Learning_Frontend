let actions = document.getElementsByClassName('btn')
let input1 = document.getElementById('number-one')
let input2 = document.getElementById('number-two')
let result = document.getElementById('result')

// check number
input1.onclick=() =>{
    if (input1.value < 0) {
        input1.value = 0
    }
  }
  input2.onclick=() =>{
    if (input2.value < 0) {
        input2.value = 0
    }
  }

// check event
for (const button of actions) {
    button.onclick = () => {
    switch (button.id) {
        case 'btn-sum':
            result.innerText = 'Result: ' + (parseInt(input1.value) + parseInt(input2.value))
            break;

        case 'btn-subtract':
            result.innerText = 'Result: ' + (parseInt(input1.value) - parseInt(input2.value))
            break;
        
        case 'btn-multiply':
            result.innerText = 'Result: ' + (parseInt(input1.value) * parseInt(input2.value))
            break;

        case 'btn-divide':
            result.innerText = 'Result: ' + (parseInt(input1.value)/parseInt(input2.value))
            break;
    
        default: 0
            break;
    }
}
}