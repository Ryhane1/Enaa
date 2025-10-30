 function escalier(n){
 const valeurs = [1,2];
 const compteur = 0 ;
  for (i= 0 ; i < valeurs.length; i++){
    for (j = 0; j< valeurs.length; j++){
  if ( valeurs[i] + valeurs[j] === n){

    compteur++;
  }



  }}
return compteur}
console.log(escalier(4))
