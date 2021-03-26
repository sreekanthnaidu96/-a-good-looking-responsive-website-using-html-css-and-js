// simple javascript just to change class of content when a icon is clicked



let toggler = document.getElementsByClassName("togglebutton")[0];
let content = document.getElementsByClassName("nav-links")[0];

toggler.addEventListener("click",()=>{
    content.classList.toggle("active")})