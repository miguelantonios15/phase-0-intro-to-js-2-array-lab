// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Cats2){
    cats.push(Cats2); 
} 

function destructivelyPrependCat(Cats2){
    cats.unshift(Cats2); 
}

function destructivelyRemoveLastCat(Cats2){
    cats.pop(Cats2); 
}

function destructivelyRemoveFirstCat(Cats2){
    cats.shift(Cats2); 
}

function appendCat(newName){
   const cats3 = [...cats, newName];  
   return cats3; 
   
}

function prependCat(newName){
    const cats4 = [newName, ...cats];
    return cats4; 
}

function removeLastCat(){
    const cats4 = cats.slice(0, -1);
    return cats4
}

function removeFirstCat(){
    const cats4 = cats.slice(1);
    return cats4;
}