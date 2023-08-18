let score = document.getElementById('box-score-home')
let buttons = document.getElementsByClassName('btn home')

// for (const button of buttons) {
//     let x = parseInt(button.innerText)
//     button.onclick = () => {
//         switch (x) {
//             case 1:
//                 score.innerText = (parseInt(score.innerText) + x).toString().padStart(2,'0')
//                 break;

//             case 2:
//                 score.innerText = (parseInt(score.innerText) + x).toString().padStart(2,'0')
//                 break;

//             case 3:
//                 score.innerText = (parseInt(score.innerText) + x).toString().padStart(2,'0')
//                 break;
//         }
//     }
    
// }

// // Note:
// let number = 2
// // padStart --> 02, 002  // dùng cho string
// let string = number.toString().padStart(2,'0')


// Cách khác

for (const element of buttons) {
    element.onclick = ()=> {
        let x = parseInt(score.innerText) + parseInt(element.innerText);
        if(x < 10) 
            score.innerText = `0${x}`;
        else
            score.innerText = x;
    };
};