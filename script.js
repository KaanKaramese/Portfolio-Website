const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const returnTop = document.querySelector(".return-top");

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
        returnTop.classList.add('.active');
    }
    else{
        returnTop.classList.remove('.active');
    }
});