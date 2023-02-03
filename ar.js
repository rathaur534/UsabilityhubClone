const toogleButton=document.getElementById('nav-toogle');
const navlinks=document.getElementById('nav-links');
toogleButton.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
})
