function nomrevers(mot){
let tableau1 = mot.split('');
const tableau2 = [...tableau1].reverse();
if (tableau1.join('') === tableau2.join('')){
console.log(true)
}else {
    console.log(false)
}

}
nomrevers("legal")