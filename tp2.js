document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn'); // Sélectionner le bouton
    const bloc = document.querySelectorAll('h4'); // Sélectionner les textes
    const blockr = document.querySelectorAll('.block.rect'); // Sélectionner les blocs
    //le tableau dobjet
    const tabcouleur = [
        { background: 'red', text: 'white' },
        { background: 'green', text: 'black' },
        { background: 'blue', text: 'yellow' },
        { background: 'yellow', text: 'blue' },
        { background: 'purple', text: 'orange' },
        { background: 'white', text: 'black' }
    ]; // Tableau d'objets avec les couleurs pour le fond et le texte
    
    let colorIndex = 0; // Initialisation du compteur
    const intervalTime = 1000; // Temps en millisecondes

    // Fonction pour mettre à jour les couleurs de fond et de texte
    function miseajourColors() {
        const Couleur = tabcouleur[colorIndex];
        
        // Changer la couleur de fond des blocs
        blockr.forEach(block => {
            block.style.backgroundColor = Couleur.background;
        });
        
        // Changer la couleur du texte des éléments h4
        bloc.forEach(el => {
            el.style.color = Couleur.text;
        });

        // Mettre à jour l'index des couleurs
        colorIndex = (colorIndex + 1) % tabcouleur.length;
    }

    // Appeler la fonction de mise à jour des couleurs à intervalles de temps
    setInterval(miseajourColors, intervalTime);
});




