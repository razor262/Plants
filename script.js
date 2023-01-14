let start = document.querySelector("#burger-container")
let navbar = document.querySelector('.header_navbar')
start.onclick = f4

function f4() {
    console.log('сработало')
    navbar.classList.toggle('work');
    start.classList.toggle('open');
}
