//Use this file to implement Part One of your project

var animal;


function search(animalName){// this is the search function
    for (var i = 0; i < animals.length; i++){
        if (animalName.toUpperCase() === animals[i].name.toUpperCase()){
            return animals[i];
        }
    } return null;
}

function edit(animalName,object){//this is how we edit stuff
     for (var i = 0; i < animals.length; i++){
        if (animalName === animals[i].name){
        animals[i] = object;
        }
     }
}

function remove(animalName){  // this is where we delete stuff
     for (var i = 0; i < animals.length; i++){
         if(animalName.toUpperCase() === animals[i].name.toUpperCase()){
        animals.splice(i, 1);
        }
    }
}

function create(object){ // this is where we create stuff
    var match = search(object.name);        
    if (!match) 
    animals.push(object);
}