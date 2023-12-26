"use strict"

document.addEventListener('DOMContentLoaded',function() {

    const burgerIcon = document.getElementById("burger-icon");
    const menu = document.getElementById("menu");

    burgerIcon.addEventListener('click',function(){
        menu.classList.toggle('active');
    })
})

let body=document.querySelector('body');
let bouton =document.querySelector('button');



// bouton.textContent='light'
// body.style.background="black";
// header.style.background="black";
// body.style.color="white";


function changeCouleur() {
    body.classList.toggle('dark')
}

bouton.addEventListener('click',changeCouleur)