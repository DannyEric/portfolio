// Animation fade-in quand la section entre dans le viewport
const faders = document.querySelectorAll('.fade-in');
// Récuperer l'acttribut class du nav 
const nom_class_menu = document.querySelector('nav').getAttribute('class');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Animation sliding description à l'ancienne (facultatif)
window.addEventListener('scroll', () => {
    const description = document.querySelector('.description');
    if (window.innerWidth >= 1024) {
        if (window.scrollY >= 200 && window.scrollY <= 974) {
            description.classList.add('description_scroll');
        } else {
            description.classList.remove('description_scroll');
        }
    }
});

// Bouton "Voir mes Projets" scroll fluide
document.querySelector('.boutton-header button').addEventListener('click', () => {
    document.getElementById('pj').scrollIntoView({
        behavior: 'smooth'
    });
});

var lien = document.querySelectorAll('nav a');
var id_lien = ["ac", "propos", "skill", "pj", "contact"];

lien[0].addEventListener('click', (ev) => {
    ev.preventDefault();
    document.getElementById(id_lien[0]).scrollIntoView({
        behavior: 'smooth'
    });
    (nom_class_menu === "cacher") ? toogleMenu('afficher') : toogleMenu('cacher');
})

lien[1].addEventListener('click', (ev) => {
    ev.preventDefault();
    document.getElementById(id_lien[1]).scrollIntoView({
        behavior: 'smooth'
    });
    (nom_class_menu === "cacher") ? toogleMenu('afficher') : toogleMenu('cacher');
})


lien[2].addEventListener('click', (ev) => {
    ev.preventDefault();
    document.getElementById(id_lien[2]).scrollIntoView({
        behavior: 'smooth'
    });
    (nom_class_menu === "cacher") ? toogleMenu('afficher') : toogleMenu('cacher');
})


lien[3].addEventListener('click', (ev) => {
    ev.preventDefault();
    document.getElementById(id_lien[3]).scrollIntoView({
        behavior: 'smooth'
    });
    (nom_class_menu === "cacher") ? toogleMenu('afficher') : toogleMenu('cacher');
})


lien[4].addEventListener('click', (ev) => {
    ev.preventDefault();
    document.getElementById(id_lien[4]).scrollIntoView({
        behavior: 'smooth'
    });
    (nom_class_menu === "cacher") ? toogleMenu('afficher') : toogleMenu('cacher');
})

// clic sur menu 
const menu = document.getElementsByClassName('btn-menu')[0];
menu.onclick = function () {
    (nom_class_menu === "cacher") ? toogleMenu('afficher') : toogleMenu('cacher');
}

function toogleMenu(choix) {
    if (choix === 'afficher') {
        document.getElementsByTagName('nav')[0].classList.toggle('apparition-nav');
        document.getElementsByTagName('nav')[0].classList.toggle('cacher');
    } else if (choix === 'cacher') {
        document.getElementsByTagName('nav')[0].classList.toggle('apparition-nav');
        document.getElementsByTagName('nav')[0].classList.toggle('cacher');
    }
}

//fonction pour flipped card
function flipCard(container) {
    const card = container.querySelector('.card');
    card.classList.toggle('flipped');
}

//typed.js
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed", {
        strings: ["Développeur web", "Développeur Desktop", "Développeur Mobile", "Administrateur Systèmes et Réseaux"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    });
});

const btn = document.getElementById('btnTop');

// Montrer le bouton quand on scroll
window.onscroll = () => {
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

// Cliquer = retour en haut
btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});