// la diference entre let,var et const 

function letFonction(){
    let a = 0;

    for(let i= 0 ; i<=10; i++){
        a += i;
    }

    console.log(a); 
    /**
     *Ici on reçoi comme réponse 55 car il reassigne la valeur de a dans le boucle 
     *car a est visible partout dans la fonction 
     */ 
    
    /**
     *  console.log(i); 
     * dans cette ligne on observe une erreur
     *  de type indifined car ici le i ne visible que dans la boucle for
     */
   
}

letFonction();

function varFoncton(){
    var a = 0;

    for(var i= 0 ; i<=10; i++){
        a += i;
    }

    console.log(a); 
    /**
     *Ici on reçoi comme réponse 55 car il reassigne la valeur de a dans le boucle 
     *car a est visible partout dans la fonction 
     */ 
    
     console.log(i); 
    /**
     * dans cette ligne on observe une erreur que i a une valeur 11 
     * ce qui veux dire que la variable "i" a une porter globa dans la fonction
     */
}

varFoncton();


function constFunction(){
    const a = 12;
    for(let i=0; i<=10; i++){
        // a += i;
        /**
         * Ici on aura une erreur de type Assignment to constant variable
         * car un variable de type const ne peut jamais ré-assigner 
         */
        console.log(i);
    }
}

constFunction();

// Fonction fleché
const mFonction = arg => arg * 5;

console.log(mFonction(2));

// La difference de fonction basique et une fonction fléché
// --> fonction basiaue
const me = {
    name : "Jhon",
    presentFriend: function(friend){
        return "Tu connais " + friend + " ?";
    }
}
console.log(me.presentFriend("Kevin"));

// --> fonction flécher 
const me2 = {
    name: "Milan",
    presentMyself: () => "Hello !",
    presentFriend: friend => "Tu connais " + friend + " ?"
}
console.log(me2.presentFriend("Sacha"));
console.log(me2.presentMyself())
/**
 * Ici quant on observe les deux fonction le deuxieme est plus courte
 */


// Fonction avec parametre par défaut

function nomComplet(prenom, nom = "ibra"){
    console.log(prenom+" "+nom);
}

nomComplet("Brad");

// Parametre rest