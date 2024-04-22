/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
}

/**
 * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
 * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
 */


/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */

function afficherProposition(proposition) {
    let zoneProposition  = document.querySelector('.zoneProposition')

    zoneProposition.innerText = proposition

}


function lancerJeu() {

    let btnValiderMot = document.getElementById('btnValiderMot')
    let inputEcriture = document.getElementById('inputEcriture')
    let score = 0
    let i = 0
    let listeProposition = listeMots
    console.log(listeProposition[i])

    afficherProposition(listeProposition[i])

    btnValiderMot.addEventListener('click', () => {
        // console.log(inputEcriture.value)
        // console.log(listeMots[i])
        if(listeProposition[i] === inputEcriture.value) {
            console.log('mot trouve')
            score++
        }

        i++
        afficherResultat(score, i)
        inputEcriture.value = ""

        if(listeProposition[i] === undefined) {
            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true;
        } else {
            afficherProposition(listeProposition[i])
        }
        
    })

    let optionSource = document.querySelectorAll('input[name="optionSource"]')

    for( index = 0; index < optionSource.length; index++) {
        optionSource[index].addEventListener('change', (event) => {
            console.log(event.target.value)
            if(event.target.value === "1") {
                listeProposition =listeMots
            } else {
                listeProposition = listePhrases
            }
            afficherProposition(listeProposition[i])
        })
    }


    afficherResultat(score, i)
}





// array1.forEach((element) => console.log(element));
