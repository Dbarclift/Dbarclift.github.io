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