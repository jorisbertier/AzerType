const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]


function afficherResultat(resultat, totalMots) {
    let message = "Votre score est de "+ resultat +" sur " + totalMots
    return message
}

function choisirPhrasesOuMots() {
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}

function lancerBoucleDeJeu(listeProposition) {
    let score = 0
        for (let i = 0; i < listeProposition.length; i++) {
            let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
            if (motUtilisateur === listeProposition[i]) {
                score++
            }
        }
    return score
} 

function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let totalMots = 0

    if(choix === "mots") {
        lancerBoucleDeJeu(listeMots)
        totalMots = listeMots.length
    } else {
        lancerBoucleDeJeu(listePhrases)
        totalMots = listePhrases.length
    }

    console.log(afficherResultat(score, totalMots))
    
}

lancerJeu()

// switch(motUtilisateur) {
//     case "Cachalot":
//         score ++
//         break
//     case "Pétunia":
//         score ++
//         break
//     case "Serviette":
//         score ++
//         break
// }

