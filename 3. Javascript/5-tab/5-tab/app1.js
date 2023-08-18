// BT5
// 1.Băt sự kiện thanh text 
// 2.Thay class collapse thành show và ngược lại khi bắt sự kiện

let textBar = document.getElementsByTagName('button')[0]
let a = document.getElementById('collapseOne')
textBar.onclick = () => {
    if (a.classList.contains('collapse')) {
        a.classList.replace('collapse','show')
    }
    else 
         a.classList.replace('show','collapse')
}

