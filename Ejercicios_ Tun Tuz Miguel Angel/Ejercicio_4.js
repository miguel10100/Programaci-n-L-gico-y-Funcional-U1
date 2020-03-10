//Ejercicio 4
var arreglo = [46, 18, 75, 20];
var mayor = 0;
 
for(a = 0; a < arreglo.length; a++){
    if (arreglo[a] > mayor)
    {
        mayor = arreglo[a];
    }
}
console.log("El numero mayor es: "+mayor);