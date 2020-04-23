// Etape 1 - Sélectionner nos éléments
let input = document.getElementById('prix');
let btnValidate = document.getElementById('btnValidate');
let erreur = document.getElementById('erreur');
let instruction = document.getElementById('instructions');
let formulaire = document.getElementById('formulaire');

// Etape 2 - Cacher l'erreur et désactiver le bouton
erreur.style = 'display : none';
// btnValidate.disabled = true;

// Etape 3 - Générer un nombre aléatoire et la variable coups
let aleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;
console.log(aleatoire);

//function verifier 
function verifier(nombre){

    let instruction = document.createElement('div');

    if(nombre < aleatoire){

        // C'est plus
        instruction.textContent = "#" + coups + " ( " + nombre + " ) c'est plus !";
        instruction.className = 'instruction plus';

    } else if (nombre > aleatoire){

        // C'est moins
        instruction.textContent = "#" + coups + " ( " + nombre + " ) c'est moins !";
        instruction.className = 'instruction moins';

    } else {

        instruction.textContent = "#" + coups + " ( " + nombre + " ) c'est le juste prix !";
        instruction.className = 'instruction fini';
        input.disabled = true;

    }

    document.querySelector('#instructions').prepend(instruction);

}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {

    if (isNaN(input.value) || input.value == "") {

        erreur.style = 'display : inline';
        // btnValidate.disabled = true;

    } else {

        erreur.style = 'display : none';
        // btnValidate.disabled = false;

    }
})

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == "") {

        input.style = 'border-color : red';
        // btnValidate.disabled = true;

    } else {

        coups++;
        input.style = 'border-color : silver';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
        // btnValidate.disabled = false;

    }
})

// Etape 6 - Créer la fonction vérifier
