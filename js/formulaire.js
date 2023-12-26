"use script"

let pseudo =document.getElementById('pseudo')
let mail =document.getElementById('mail')
let mdp = document.getElementById('mdp')
let bt = document.getElementById('envoyer')
let choisir = document.getElementById('choisir')
let f = document.getElementById('f')
let h = document.getElementById('h')
let pomme = document.getElementById('po')
let poire = document.getElementById('poi')
let fraise = document.getElementById('fr')
const form = document.querySelector('form')
let passwordError = document.getElementById('mdpError')
let switcher = document.querySelector('.Darkmode');
let body=document.querySelector('body');



function envoyerFormulaire(e){
    e.preventDefault();

    if (validatePassword(mdp.value)) {
        console.log(pseudo.value)
        console.log(mail.value);
        console.log(mdp.value);
    }
}

form.addEventListener('submit',envoyerFormulaire)


function validatePassword() {

    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}/;

    if (passwordRegex.test(mdp.value) && mdp.value.length >= 8){
        passwordError.textContent = ''
        return true
    } else{
        passwordError.textContent = 'Le mot de passe doit contenir une majuscule, une minuscule,un caractère spécial et doit contenir au moins 8 lettres';
        return false
    }
}

mdp.addEventListener('input', () => {
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}/;

    if (passwordRegex.test(mdp.value) && mdp.value.length >= 8){
        passwordError.textContent = ''
        return true
    } else{
        passwordError.textContent = 'Le mot de passe doit contenir une majuscule, une minuscule,un caractère spécial et doit contenir au moins 8 lettres';
        return false
    }
})

document.addEventListener('DOMContentLoaded',function() {

    const burgerIcon = document.getElementById("burger-icon");
    const menu = document.getElementById("menu");

    burgerIcon.addEventListener('click',function(){

        menu.classList.toggle('active');
    })
})


let DarkMode = false

function changeCouleur(){
    if(DarkMode == false){
        DarkMode = true
        switcher.textContent='light'
        body.style.background="black";
        body.style.color="white";
    }else {
        DarkMode = false
        body.style.background="yellow";
        body.style.color="black";
        switcher.textContent='dark'
        
        
}
    }
    
switcher.addEventListener('click',changeCouleur)

var swiper = new Swiper(".mySwiper", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
