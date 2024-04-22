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
    console.log(listeMots[i])

    afficherProposition(listeMots[i])

    btnValiderMot.addEventListener('click', () => {
        // console.log(inputEcriture.value)
        // console.log(listeMots[i])
        if(listeMots[i] === inputEcriture.value) {
            console.log('mot trouve')
            score++
        }

        i++
        afficherResultat(score, i)

        if(listeMots[i] === undefined) {
            afficherProposition("Le jeu est finis")
            btnValiderMot.disabled = true;
        } else {
            afficherProposition(listeMots[i])
        }
        inputEcriture.value = ""
        // console.log(i)


        
    })

    // inputEcriture.addEventListener('click', () => {
        
    // })

    afficherResultat(score, i)
}


