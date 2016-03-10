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

// Should take an object, 
// if this object has a noises array return them as a string separated by a space, 
// if there are no noises return 'there are no noises'"

function maybeNoises(obj){
    if (obj.noises && Array.isArray(obj.noises) && obj.noises.length){
        return obj.noises.join(" ");
    
    }    return "there are no noises";
 
    
}
function arrayIncludes(array, element) {
    return (array.indexOf(element) > -1);
}

//"hasWord() : Should take a string of words
// and a word and
//return true if <word>
//is in <string of words>

function hasWord(string, word){
 return string.indexOf(word) > -1;
}

//11 "addFriend() : Should take a name 
//and an object 
//and add the name to the object's friends array 
//then return the object"

function addFriend(name, obj){
    obj.friends.push(name);
    return obj;

}
//12 "isFriend() : Should take a name and an object
//and return true if <name> is a friend of <object> and false otherwise"

function isFriend(name, obj){
    return (obj.friends !== undefined && obj.friends.indexOf(name)> - 1)
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

//14 "updateObject() : Should take an object, a key and a value.
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it."

function updateObject(obj, key, val){
    obj[key]=val;
    return obj;
}

// 15 "removeProperties() : Should take an object and an array of strings.
//Should remove any properties on <object> that are listed in <array>"

function removeProperties(obj,strings){
    for(var i=0; i< strings.length; i++){
        var currentProp= strings[i];
        if (obj[currentProp] !== undefined ){
            delete obj[currentProp];
        }
    }
    return obj
}

//16 "dedup() : Should take an array
//and return an array
//with all the duplicates removed"

function dedup(array){
    var out=[];
    for (var i=0; i< array.length; i++){
        var currentItem = array[i];
        if (!(out.indexOf(currentItem) > -1)){
        out.push(currentItem);
        }
    }
    return out;
}
