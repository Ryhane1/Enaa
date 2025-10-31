
let taxis = [ 
{ id: 1, position: 5, available: true, timeRemaining: 0, totalRides: 0 }, 
{ id: 2, position: 12, available: true, timeRemaining: 0, totalRides: 0 }, 
{ id: 3, position: 20, available: true, timeRemaining: 0, totalRides: 0 } 
] 
 
let requests = [ 
{ reqId: 1, position: 10, duration: 3, time: 0 }, 
{ reqId: 2, position: 3, duration: 4, time: 2 }, 
{ reqId: 3, position: 18, duration: 2, time: 4 }, 
{ reqId: 4, position: 7, duration: 5, time: 5 } 
] 
let idCounter = 5 ;
let timecount = 0 ;
function addrequest(){
    let nvposition = Number(prompt("Entrez le position : "));
    let nvduration = Number(prompt("Entrez la duration : "));
    let nvrequest = {
        idL: idCounter,
        position : nvposition,
        duration : nvduration,
        time : timecount,
    };
    idCounter++;
    timecount++;
    requests.push(nvrequest);
    console.log("Request ajoutée ");
}

function taxidispo(taxis){
    return taxis.filter(taxi => taxi.available === true);
}


  function distancedispo(taxis, position) {
  if (taxis.length === 0) return null;
  let closest = taxis[0];
  for (let i = 1; i < taxis.length; i++) {
    if (Math.abs(taxis[i].position - position) < Math.abs(closest.position - position)) {
      closest = taxis[i];
    }
  }
  return closest;
}

let dd = distancedispo(taxis,requests[0].position);
let queue = [];
let cc = requests[0] ;


function reservation(dd, cc){
if (dd.available ===true ){
dd.available = false;
dd.timeRemaining = cc.duration ;
dd.totalRides++;
dd.position = cc.position ;
return dd;
}else if (!dd){
    queue.push(cc);
}}


let timing = 0;
let aa = reservation(dd,cc);
console.log(reservation(dd, cc));


function tmRemaining(aa){
  for (let taxi of taxis){
  timing++;
if (aa.timeRemaining > 0){
   timing++;
aa.timeRemaining--;
console.log(aa)
if (aa.timeRemaining===0){
  aa.available= true ;
  aa.position = cc.position;
return aa;
}
  if (queue.length > 0) {
          let nextRequest = queue.shift();
          reservation(nextRequest);
        }
}}}
console.log(tmRemaining(aa))


function simulate(maxTime = 15) {
  for (currentTime = 0; currentTime <= maxTime; currentTime++) {
    console.log(`\nMinute ${currentTime}:`);
for (let i = 0; i < requests.length; i++) {
  if (requests[i].time === currentTime) {
    reservation(requests[i]);
  }
}
    tmRemaining();

    if (currentTime === 5) addRequest(); 
  }}


