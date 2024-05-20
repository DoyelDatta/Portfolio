var typed=new Typed(".text",{
    strings:["Frontend Developer","Java Developer","Web Developer"], 
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay: 1000, 
    loop:true 
}); 

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});