// dichiare variabili 
let hamburgerOpen = document.querySelector(".fas.fa-bars");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let closeHamburger = document.querySelector(".fas.fa-times");

// stamparli in console 
console.log(hamburgerOpen, hamburgerMenu, closeHamburger);

// aggiunta click con le sue funzioni 
hamburgerOpen.addEventListener("click", function(){
    
    hamburgerMenu.classList.add("active");  // inserimento active per visualizzare hamburger menu 
    
})

// aggiunta click con le sue funzioni
closeHamburger.addEventListener("click", function(){
    
    hamburgerMenu.classList.remove("active");  // rimozione active per ritornare icona hamburger-menu
})




