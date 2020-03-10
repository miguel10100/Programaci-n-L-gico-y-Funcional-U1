//Ejercicio 11
let a = new Set(["carlos","maria","mora","pepe"]);
let b= new Set(["pepe","pera","carlos","maria"]);


function union(a, b){
    let union = new Set([...a, ...b]);
return union;
}

function interseccion(a,b)
{
let intersection = new Set([...a].filter(x => b.has(x)));
return intersection;
}
function diferencia(a,b)
{
let difference = new Set([...a].filter(x => !b.has(x)));
return difference;
}

console.log(union(a,b));
console.log(interseccion(a,b));
console.log(diferencia(a,b));
