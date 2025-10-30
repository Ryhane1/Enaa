
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
let timecount = 6 ;
function addrequest(){
    let nvposition = Number(prompt("Entrez le position : "));
    let nvduration = Number(prompt("Entrez la duration : "));
    let nvrequest = {
        idL: idCounter,
        titre : nvposition,
        auteur : nvduration,
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
for (let j = 1; j < requests.length; j++) {

let cc = requests[j];

function distancedispo(taxidispo){
const reqdispo = cc.position ;
let clostaxi = taxidispo[0];
for (let i = 1; i < taxidispo.length; i++) {

  const currentaxi = taxidispo[i];
  if (Math.abs(currentaxi.position - reqdispo) < Math.abs(clostaxi.position - reqdispo)) {
    clostaxi = currentaxi;
  }
}
return clostaxi;
}
let dd = distancedispo(taxidispo(taxis));

let queue = [];
function reservation(dd, cc){
if (dd.available ===true ){
dd.available = false;
dd.timeRemaining = cc.duration ;
dd.totalRides++;
return dd;
}else{
    queue.push(cc)
}

}
let timing = 0;


console.log(reservation(dd, cc));

for (let i = 0; i < taxis.length; i++){
while (taxis[i].available= true){
reservation(dd, cc)



}}






}






