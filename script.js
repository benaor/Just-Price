// Etape 1 - Sélectionner nos éléments
let proposition = document.getElementById('prix');
let btnValidate = document.getElementsByTagName('button');
let erreur      = document.getElementById('erreur');
let instruction = document.getElementById('instructions');

// Etape 2 - Cacher l'erreur
erreur.style = 'display : none';

// Etape 3 - Générer un nombre aléatoire
let aleatoire = Math.floor( Math.random() * 1001);

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
proposition.addEventListener('keyup', () => {

    if(isNaN(proposition.value)){

        erreur.style = 'display : inline';

    } else {

        erreur.style = 'display : none';
        
    }
})
