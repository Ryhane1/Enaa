//j'ai creer un tableau pour les voyel 
// j'ai creer un compteur
// j'ai creer un prompt pour entre le mot 
// apres j'ai utilise la methode split pour converti le mot pour un tableau avec chaque element et lettre du mot
//apre j'ai comparer ces lettres avec le tableau du voyal avec le compteur qui compte les lettere en commun
// et affiche le nomber du compteur a la fin 

const voyel = ['a', 'e', 'i', 'o', 'u']; 
let compteur = 0 ;
let mot = prompt("entre le mot  : ");
let tableau = mot.split('');
for ( let i =0 ; i < tableau.length; i++){
    for( let j =0 ; j< voyel.length; j++){
if ( tableau[i]=== voyel[j]){
    compteur++;
}}

}

console.log(compteur)

