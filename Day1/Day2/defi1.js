// 1. Créer un tableau des valeurs possibles : [1, 2]
// 2. Initialiser un compteur à 0
// 3. Parcourir toutes les combinaisons possibles de deux valeurs
// 4. Vérifier si leur somme est égale à n
// 5. Incrémenter le compteur si c’est le cas
// 6. Retourner le compteur à la fin

function escalier(n) {
  const valeurs = [1, 2];
  let compteur = 0;

  for (let i = 0; i < valeurs.length; i++) {
    for (let j = 0; j < valeurs.length; j++) {
      if (valeurs[i] + valeurs[j] === n) {
        compteur++;
      }
    }
  }

  return compteur;
}

console.log(escalier(4)); // ➜ 0 (aucune combinaison de 1 ou 2 ne donne 4)
