



// let motUtilisateur = prompt("Entrez un mot correct pour scoré:" + listeMots[0])
// if( motUtilisateur === listeMots[0]) {
//     score++
// }

// motUtilisateur = prompt("Entrez un mot correct pour scoré:" + listeMots[1])
// if( motUtilisateur === listeMots[1]) {
//     score++
// }
// motUtilisateur = prompt("Entrez un mot correct pour scoré:" + listeMots[2])
// if( motUtilisateur === listeMots[2]) {
//     score++
// }
let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

for(i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entrez un mot correct pour scoré:" + listeMots[i])
    if( motUtilisateur === listeMots[i]) {
            score++
        }
}

console.log(score)




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

