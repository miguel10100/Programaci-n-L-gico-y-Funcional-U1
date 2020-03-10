let arreglo1 =[1,2,3,4,5];
let arreglo2 =[1,2,3,4,5];
var i=0
var valor1, valor2=true;


do 
{

if (arreglo1[i]==arreglo2[i])
{
 valor1 = true
}
else
{
    
valor2=false

}
i++

}while(i<arreglo1.length || i< arreglo2.length)

var opera= valor1 && valor2

console.log(opera)