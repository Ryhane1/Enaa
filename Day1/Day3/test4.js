let taxis = [
  { id: 1, position: 5, available: true, timeRemaining: 0, totalRides: 0 },
  { id: 2, position: 12, available: true, timeRemaining: 0, totalRides: 0 },
  { id: 3, position: 20, available: true, timeRemaining: 0, totalRides: 0 }
];

let requests = [
  { reqId: 1, position: 10, duration: 3, time: 0 },
  { reqId: 2, position: 3, duration: 4, time: 2 },
  { reqId: 3, position: 18, duration: 2, time: 4 },
  { reqId: 4, position: 7, duration: 5, time: 5 }
];

let queue = [];

function taxidispo(taxis) {
  return taxis.filter(taxi => taxi.available);
}



function distancedispo(taxis, position) {
  let dispo = taxidispo(taxis);
  if (dispo.length === 0) return null;
  return dispo.reduce((a, b) =>
    Math.abs(a.position - position) < Math.abs(b.position - position) ? a : b
  );
}

function reservation(request) {
  let taxi = distancedispo(taxis, request.position);
  if (!taxi) {
    queue.push(request);
    console.log(`→ Request ${request.reqId} added to queue (no taxi available).`);
    return;
  }

  let distance = Math.abs(taxi.position - request.position);
  taxi.available = false;
  taxi.position = request.position;
  taxi.timeRemaining = request.duration;
  taxi.totalRides++;

  console.log(`→ Request ${request.reqId} assigned to Taxi ${taxi.id} (distance: ${distance})`);
}

function updateTaxis() {
  for (let taxi of taxis) {
    if (!taxi.available && taxi.timeRemaining > 0) {
      taxi.timeRemaining--;
    if (taxi.timeRemaining === 0) {
        taxi.available = true;
     console.log(`→ Taxi ${taxi.id} finished ride and is now available.`);
 if (queue.length > 0) reservation(queue.shift());
}}}
}

function simulate(maxTime = 15) {
  for (let minute = 0; minute <= maxTime; minute++) {
    console.log(`\nMinute ${minute}:`);
    requests
      .filter(r => r.time === minute)
      .forEach(r => reservation(r));
    updateTaxis();
  }
}

simulate();



let idCounter = requests.length + 1;
let currentTime = 0;

function addRequest() {
  let nvposition = Number(prompt("Entrez la position de la requête :"));
  let nvduration = Number(prompt("Entrez la durée du trajet :"));

  let nvrequest = {
    reqId: idCounter++,
    position: nvposition,
    duration: nvduration,
    time: currentTime // la minute actuelle de la simulation
  };

  requests.push(nvrequest);
  console.log(`→ Nouvelle requête ajoutée : Request ${nvrequest.reqId} à la minute ${currentTime}`);
}


function simulate(maxTime = 15) {
  for (currentTime = 0; currentTime <= maxTime; currentTime++) {
    console.log(`\nMinute ${currentTime}:`);
    // traitement des requêtes prévues à cette minute
for (let i = 0; i < requests.length; i++) {
  if (requests[i].time === currentTime) {
    reservation(requests[i]);
  }
}

    // mise à jour des taxis
    updateTaxis();

    // possibilité d’ajouter une requête manuelle
    if (currentTime === 5) addRequest(); // ex. demander à la minute 5
  }
}
