// Ce programme supprime les doublons d’un tableau.
// Il parcourt chaque élément du tableau d’origine et crée un nouveau tableau
// contenant uniquement les valeurs uniques.

// Déclaration du tableau initial avec des doublons
let tab = [2, 4, 6, 8, 4, 5];

// Définition de la fonction supdubl qui enlève les doublons
function supdubl(tab) {
    // Nouveau tableau vide pour stocker les éléments uniques
    let tabsu = [];

    // On parcourt chaque élément du tableau d’origine
    for (let i = 0; i < tab.length; i++) {
        // Variable qui servira à vérifier si l’élément existe déjà dans tabsu
        let existe = false;

        // On compare l’élément courant avec ceux déjà présents dans tabsu
        for (let j = 0; j < tabsu.length; j++) {
            if (tab[i] === tabsu[j]) {
                // Si l’élément existe déjà, on le marque comme trouvé
                existe = true;
                break; // on arrête la recherche
            }
        }

        // Si l’élément n’existe pas encore, on l’ajoute à tabsu
        if (!existe) {
            tabsu.push(tab[i]);
        }
    }

    // On affiche le tableau sans doublons
    console.log(tabsu);
}

// Appel de la fonction avec notre tableau
supdubl(tab);
