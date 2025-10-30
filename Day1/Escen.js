
function Elavtor(N){

    let position = 0;
    let moves = 0 ;

    while(position !== N){

        if(N > position){
            position += 2
        }else{
            position -=1 ;
        }

        ++moves

        if(position > N + 2 ){
            position =-1 ;
        }
    }

    console.log(`${N} nombre Move ${moves}`)
}

console.log(Elavtor(N));