const menuButton=document.querySelector('.menu-button');
const navigation=document.querySelector('.side-nav');
const links=document.querySelectorAll('.side-nav a');
const sections=document.querySelectorAll('.page-section');
menuButton.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
links.forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
window.addEventListener('scroll',()=>{let current='about';sections.forEach(section=>{if(window.scrollY>=section.offsetTop-170)current=section.id;});links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${current}`));});
