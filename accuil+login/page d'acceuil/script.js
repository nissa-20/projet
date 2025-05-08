document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Ajouter un écouteur d'événement sur chaque lien
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Retirer la classe 'active' de tous les liens
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Ajouter la classe 'active' au lien cliqué
            this.classList.add('active');
        });
    });
    
    // Définir Accueil comme actif par défaut
    navLinks[0].classList.add('active');
});

const mots = ["l'espoir", "la solidarité", "l'humanité"];
let index = 0;

setInterval(() => {
index = (index + 1) % mots.length;
document.querySelector('.highlight').textContent = mots[index];
}, 2500); // toutes les 2,5 secondes



