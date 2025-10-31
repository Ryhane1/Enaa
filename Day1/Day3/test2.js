let taxidis = taxidispo.indexOf(clostaxi);
return taxidis;




for (let i = 0; i < taxis.length; i++){
while (taxis[i].available= true){
reservation(dd, cc)

}}

function distancedispo(taxidispo){
const reqdispo = cc.position ;
let clostaxi = taxidispo[0];
for (let j = 1; j < requests.length; j++) {
for (let i = 1; i < taxidispo.length; i++) {

  const currentaxi = taxidispo[i];
  if (Math.abs(currentaxi.position - reqdispo) < Math.abs(clostaxi.position - reqdispo)) {
    clostaxi = currentaxi;
  }
}
return clostaxi;
}}

console.log(munite)

  tmRemaining(aa, cc);
while ( aa.available === true ){
  reservation(aa, queue);
      console.log(`Time ${timing}: Taxi ${aa.id} en course (${aa.timeRemaining} restant)`);

}


// fonction pour mettre à jour les taxis chaque minute
function updateTaxis(minute) {
  for (let taxi of taxis) {
    if (!taxi.available && taxi.timeRemaining > 0) {
      taxi.timeRemaining--;
      if (taxi.timeRemaining === 0) {
        taxi.available = true;
        console.log(`Minute ${minute}:`);
        console.log(`→ Taxi ${taxi.id} finished ride → now available.`);
        // si une demande est en attente, la lui attribuer
        if (queue.length > 0) {
          let nextRequest = queue.shift();
          assignTaxi(nextRequest, minute);
        }
      }
    }
  }
}


  function tmRemaining(aa, cc){
    let timing = 0;
    console.log("\n--- Début de la course ---");
    while (aa.timeRemaining > 0) {
      timing++;
      aa.timeRemaining--;
      console.log(`Time ${timing}: Taxi ${aa.id} en course (${aa.timeRemaining} restant)`);
    }
    // Fin de la course
    aa.available = true;
    aa.position = cc.position;
    console.log(`Taxi ${aa.id} a terminé la course et est de nouveau disponible.`);
    console.log("--- Fin ---\n");
    return aa;
  }
