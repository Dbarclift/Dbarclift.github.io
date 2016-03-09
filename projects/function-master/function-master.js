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
    var noises=[];
    for(var i=0; i< noises.length; i++)
        return "there are no noises";
    
}

