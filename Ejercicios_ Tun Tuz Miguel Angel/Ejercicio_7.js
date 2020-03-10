//Ejercicio 7
let arreglo =[4, 2, 1, 5, 3];
var opera;
var valor1, valor2=true;
//var aux=true;
var i=0
do
{

    if(arreglo[i]<arreglo[i+1])
    {
        //console.log(true)
        valor1=true;
    }
    else
    {
        //console.log(false);
        valor2=false;
    }
i++

}
while(i<arreglo.length-1)

opera=valor1 && valor2
console.log(opera)