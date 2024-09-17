const mesNombres = [5, 8, 21];

// parametre rest: ...nomDeVariable
function  faisMoisLaSomme(...nombres){
    console.log(nombres)
    let somme = 0;
    for(let i=0; i<nombres.length; i++){
        somme += nombres[i]; 
    }
    return somme;
}

console.log(faisMoisLaSomme(5, 8, 21, 46, 17));

// L'operateur Spread
// Exp1
function  faisMoisLaSomme3Nombre(nbr1,nbr2,nbr3){
     return nbr1+nbr2+nbr3;
}

console.log(faisMoisLaSomme3Nombre(...mesNombres));

// Exp2
const fruitsRouge = ["Fraise","Framboise"];
const fruitsVerts = ["Pomme","Poire"];

const fruits = [...fruitsRouge,"Banane",...fruitsVerts];

console.log(fruits);