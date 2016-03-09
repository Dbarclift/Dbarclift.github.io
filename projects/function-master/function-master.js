//objectValues() : Should take an object and return its values in an array
function objectValues(obj){
    var out= [];
    for(var key in obj){
        out.push(obj[key]);
    }

    return out;
}

function keysToString(obj){
    return Object.keys(obj).join(" ");
}

function valuesToString(obj){
    var out="";
   for(var key in obj){
        if (typeof obj[key]=== "string")
            out+= obj[key]+ " ";
    }
    return out.trim();
}


function arrayOrObject(collection){
  
   if (Array.isArray(collection)) 
   return "array";
   
  if(typeof collection === 'object')
   return "object";
}
 function capitalizeWord (str){
     var firstLetter = str[0];
     var restOfWord = str.substring(1);
     return firstLetter.toUpperCase()+ restOfWord;
 }


function capitalizeAllWords(str){
    var split = str.split(" ");
    var out = " ";
    for( var i=0; i < split.length; i++){
        out+= capitalizeWord(split[i])+ " ";
    }
    return str.trim();

}   
function capitalizeAllWords (str) {
   var split = str.split(" ");
   var out = "";
   for (var i =0; i < split.length; i++) {
       out += capitalizeWord(split[i]) + " ";
    }
   return out.trim();
}


//Should take an object with a name property and return 'Welcome <Name>!'"
function welcomeMessage(obj){
 return "Welcome " + capitalizeWord(obj.name) + "!";
}


//Should take an object with a name an a species and return '<Name> is a <Species>'"
function profileInfo(obj){
       return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species)
}

//Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'"

function maybeNoises(obj){
    var out=[];
    for(var i=0; i< out.length; i++)
        return "there are no noises";
    
}
function arrayIncludes(array, element) {
    return (array.indexOf(element) > -1);
}


//# 13 "nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
function nonFriends(name, people){
       //find object representing the named person
        //go thru all the people 
        //if the current persons name is the same as the name given save that object to a variable
    var out=[];
    var person;
    for (var i=0; i< people.length;i++){
        if (people[i].name === name) person = people[i];
    }

    //get that persons friends list
    var friends = person.friends;
    
    //go thru all the OTHER people
    // ask 'is this persons name in the named persons friends list
    //if not add that name to the out array
    for (var j=0; j < people.length; j++){
        var currentPerson = people[j];
        if (currentPerson === person) continue;
    
        if(!arrayIncludes(friends, currentPerson.name)){
            out.push(currentPerson.name);
        }
    }
    return out;
}