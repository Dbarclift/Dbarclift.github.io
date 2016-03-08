var animal = {};
    animal.species= 'bear';
    animal['name'] = 'Paddington';
    animal.noises=[];
    
console.log(animal);

var noises = [];
    noises[0]='Graaawwwrrr';
    noises.push('grummmble');
    noises.unshift('snuff');
    noises[noises.length]= 'whimper'; 

console.log(noises.length);

console.log(noises.length-1);

console.log(noises);
    
animal.noises= [(noises)];
 noises.push('haaalp!');
 
console.log(animal);

var animals= [];
    animals.push(animal);
    
console.log(animals);

var duck={ 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
    
};
animals.push(duck);

console.log(animals);

var albatross = {
    species: 'albatross',
    name: 'Noemi',
    noises: ['sea chanty','ka-kaaww'],
};

var moosemouse = {
    species: 'moosemouse',
    name:'Yimmers',
    noises: ['bahaaaahahah!','uhhmmm','ooOOoo'],
    
};

animals.push(albatross);

animals.push(moosemouse);

console.log(animals);

console.log(animals.length);

// using array as an object simply because it follows previous formatting
// to build a friend structure, keeps things easy to read

var friends=animals[Random(animals)].name;

function Random(animals) {
    return Math.floor(Math.random() * (animals.length - 0)) + 0;
}

moosemouse.friend=friends;

console.log(moosemouse.friend);

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