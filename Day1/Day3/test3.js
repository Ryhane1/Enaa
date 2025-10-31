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

// file d’attente des demandes non servies immédiatement
let queue = [];

// fonction utilitaire pour trouver les taxis disponibles
function availableTaxis() {
  return taxis.filter(t => t.available);
}

// fonction pour trouver le taxi le plus proche d'une position donnée
function findClosestTaxi(taxis, position) {
  if (taxis.length === 0) return null;
  let closest = taxis[0];
  for (let i = 1; i < taxis.length; i++) {
    if (Math.abs(taxis[i].position - position) < Math.abs(closest.position - position)) {
      closest = taxis[i];
    }
  }
  return closest;
}

// assigner un taxi à une requête
function assignTaxi(request, minute) {
  let taxisDispo = availableTaxis();
  if (taxisDispo.length === 0) {
    console.log(`Minute ${minute}:`);
    console.log(`→ Request ${request.reqId} at position ${request.position} → all taxis busy → added to queue.`);
    queue.push(request);
    return;
  }

  let chosenTaxi = findClosestTaxi(taxisDispo, request.position);
  let distance = Math.abs(chosenTaxi.position - request.position);
  chosenTaxi.available = false;
  chosenTaxi.timeRemaining = request.duration;
  chosenTaxi.position = request.position;
  chosenTaxi.totalRides++;

  console.log(`Minute ${minute}:`);
  console.log(`→ Request ${request.reqId} at position ${request.position} → Taxi ${chosenTaxi.id} assigned (distance: ${distance})`);
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

// simulation minute par minute
function simulate() {
  let currentMinute = 0;
  let maxTime = 20; // durée maximale de la simulation
  let requestIndex = 0;

  while (currentMinute <= maxTime) {
    // nouvelles requêtes à cette minute
    while (requestIndex < requests.length && requests[requestIndex].time === currentMinute) {
      assignTaxi(requests[requestIndex], currentMinute);
      requestIndex++;
    }

    // mise à jour des taxis (compte à rebours, libération, etc.)
    updateTaxis(currentMinute);

    currentMinute++;
  }
}

simulate();
