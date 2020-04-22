// Etape 1 - Sélectionner nos éléments
let proposition = document.getElementById('prix');
let btnValidate = document.getElementById('btnValidate');
let erreur      = document.getElementById('erreur');
let instruction = document.getElementById('instructions');

// Etape 2 - Cacher l'erreur et désactiver le bouton
erreur.style = 'display : none';
btnValidate.disabled = true;

// Etape 3 - Générer un nombre aléatoire
let aleatoire = Math.floor( Math.random() * 1001);

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
proposition.addEventListener('keyup', () => {

    if(isNaN(proposition.value) || proposition.value==""){

        erreur.style = 'display : inline';
        btnValidate.disabled = true;

    } else {

        erreur.style = 'display : none';
        btnValidate.disabled = false;

    }
})

// Etape 5 - Agir à l'envoi du formulaire
// btnValidate.addEventListener('click', () => {

// })
// Etape 6 - Créer la fonction vérifier