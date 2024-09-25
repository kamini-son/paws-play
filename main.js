const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar');


searchIcon.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    navBar.classList.remove("active");
});

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    searchForm.classList.remove("active");
});

window.onscroll=()=>{
    searchForm.classList.remove("active");
    navBar.classList.remove("active");
}
