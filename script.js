const togglebtn = document.getElementsByClassName('toggle-btn')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];
const dropDown = document.getElementsByClassName('menu')[0];
togglebtn.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
});
dropDown.addEventListener('click', () => {
    navBarLinks.classList.toggle('active') = false;
});

window.onscroll = function() {myFunction()};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}