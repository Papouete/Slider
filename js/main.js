

// DONNES 

// Numéro de la slide à afficher
// Index dans le tableau des slides
let slide = 0;
let slides;

let play = true;
let timerId;

// FONCTIONS


// 3. Création de la fonction appelée lorsque l'événement est déclenché 
function onNextSlide () 
{
    // // 1. Retirer la classe active sur l'image affichée
    // let activeSlide = document.querySelector('.slider-figure.active');
    // activeSlide.classList.remove('active')
    
    // 2. Ajouter la classe active sur l'image que l'on veut afficher (la slide suivante)
    
    // On ajoute de 1 le numéro de la slide
    slide++;
    
    // Si jamais on dépasse le dernier élément du tableau on revient à 0
    if (slide > slides.length - 1) {
        slide = 0;
    }
    
    // // On récupère la slide suivante
    // let nextSlide = slides[slide];
    
    // // Ajout de la classe active sur la slide suivante
    // nextSlide.classList.add('active');
    
     // Appel de la fonction qui met à jour la slide
    updateSlide();
};



function onPreviousSlide () 
{
    
    // let activeSlide = document.querySelector('.slider-figure.active');
    // activeSlide.classList.remove('active')
    
    // On retire de 1 le numéro de la slide
    slide--;
    
    // Si jamais on dépasse le dernier élément du tableau on revient à 0
    if (slide < 0) {
        slide = slides.length - 1;
    }
    
    // // On récupère la slide précédente
    // let previousSlide = slides[slide];
    
    // // Ajout de la classe active sur la slide précédente
    // previousSlide.classList.add('active');
     updateSlide ();
};


function updateSlide () {
    
    let activeSlide = document.querySelector('.slider-figure.active');
    activeSlide.classList.remove('active')
    
    let newSlide = slides[slide];
    
    newSlide.classList.add('active');
}



function onPlaySlide()
{
    if (play) {
        timerId = setInterval(onNextSlide, 1000);
        play = false;
       
    } else {
        clearInterval(timerId);
        play = true;
    }
    
    let icon = document.querySelector('#play-pause i');
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-stop');

}

/**
 * Renvoie un nombre aléatoire entre min et max
 * 
 * @param int min Le nombre minimum
 * @param int max Le nombre maximum
 * @return int Un nombre compris entre min et max
 */
function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// function onRandomSlides() 
// {
//     let activeSlide = document.querySelector('.slider-figure.active');
//     activeSlide.classList.remove('active')
    
//     let randomSlides = slides[parseInt((Math.random()*slides.length),10)];
//     randomSlides.classList.add('active')
// }

function onRandomSlide() 
{
    let random;
    
    // On récupère un numéro aléatoire compris entre 0 et longueur - 1
    // Si le numéro aléatoire généré est le même que le numéro de la slide
    // on en génère un autre
    do {
        random = getRandomInteger(0, slides.length - 1);
    } while (random === slide);
    
    // On l'affecte au numéro de la slide
    slide = random;
    
    // Mise à jour de la slide
    updateSlide();
}

document.addEventListener("keydown", function(e){
if(e.keyCode === 37){
    onPreviousSlide();
}
else if(e.keyCode === 39){
    onNextSlide();
}
});

// CODE PRINCIPAL

document.addEventListener('DOMContentLoaded', function () {
    // Récupérer toutes les images html dans un tableau
    slides = document.querySelectorAll('.slider-figure')
    
    // 1. Récupérer l'élément
    let nextButton = document.querySelector("#next");
    let prevButton = document.querySelector("#prev");
    let randomButton = document.querySelector('#random');
    let playButton = document.querySelector('#play-pause');
    
    // 2. Mettre en place l'événement
    nextButton.addEventListener('click', onNextSlide);
    prevButton.addEventListener('click', onPreviousSlide);
    randomButton.addEventListener('click', onRandomSlide);
    playButton.addEventListener('click', onPlaySlide);
});