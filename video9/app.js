const fruitsRouge = ["Fraise", "framboise", "cerise"];

for(let i=0; i<fruitsRouge.length; i++){
    console.log(fruitsRouge[i]);
}

for(let fruit of fruitsRouge){
    console.log(fruit);
}

// Tamplet Literals
const fruit = "fraise";

console.log(`La ${fruit} c'est bon !`);

// Destructuring Arrays
const nombres = [1, 4, 8];

const [a,,b] = nombres;

console.log(a);
console.log(b);

let c=10;
let d=30;

[c,d] = [d,c]

console.log(d);
console.log(c);

//// Destructuring Object
const myObject = {
    name : "John",
    age: 12,
    present : function(){
        console.log("Hello");
    }
}
//  Dans les déstructuration d'objet le variable doit etre les même qui se trouve auniveau d'objet ou bien on les donne des alice comme suit
const {name:name1, present:Hello} = myObject;

console.log(name1);
Hello();