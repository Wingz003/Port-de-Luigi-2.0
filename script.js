const togglebtn = document.getElementsByClassName('toggle-btn')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]

togglebtn.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

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