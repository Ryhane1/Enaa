
function fizzbuzz(n) {
  let resultat = []; // 1️⃣ On crée un tableau vide pour stocker le résultat

  for (let i = 1; i <= n; i++) { // 2️⃣ Boucle de 1 à n (inclus)
    
    // 3️⃣ Si le nombre est divisible par 3 et 5
    if (i % 3 === 0 && i % 5 === 0) {
      resultat.push("TechLead");

    // 4️⃣ Sinon, s’il est seulement divisible par 3
    } else if (i % 3 === 0) {
      resultat.push("Tech");

    // 5️⃣ Sinon, s’il est seulement divisible par 5
    } else if (i % 5 === 0) {
      resultat.push("Lead");

    // 6️⃣ Sinon, on ajoute juste le nombre
    } else {
      resultat.push(i);
    }
  }

  // 7️⃣ On renvoie le tableau final
  return resultat;
}

console.log(fizzbuzz(33)); // 8️⃣ On affiche le résultat dans la console
