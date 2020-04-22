// Etape 1 - Sélectionner nos éléments
let proposition = document.getElementById('prix');
let btnValidate = document.getElementsByTagName('button');
let erreur      = document.getElementById('erreur');

// Etape 2 - Cacher l'erreur
erreur.style = 'display : none';

// Etape 3 - Générer un nombre aléatoire
let aleatoire = Math.floor( Math.random() * 1000);


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

// Etape 5 - Agir à l'envoi du formulaire

// Etape 6 - Créer la fonction vérifier