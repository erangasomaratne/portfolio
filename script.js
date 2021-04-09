const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li');
const textItems = document.getElementById('text');
const socialIcons = document.getElementById('social');



hamburger.addEventListener('click',() => {

    textItems.classList.toggle('hide');
    socialIcons.classList.toggle('hide');
    
    navLinks.classList.toggle('open');
    links.forEach( link => {
        link.classList.toggle('fade');
        
    });   
});