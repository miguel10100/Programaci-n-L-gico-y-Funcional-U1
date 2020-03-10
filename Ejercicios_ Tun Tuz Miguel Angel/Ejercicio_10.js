//Ejercicio 10
let arreglo =[2,3,6,8,7,10]; // recibe la lista
let nuevo= []

function impar (num){
    if (num == 0) 
        return false;
    else
        return par(num-1);
}

function par(num) {
    if (num == 0) 
        return true;
    else
        return impar(num-1);
}

for(let i=0; i< arreglo.length; i++)
{
if(par(arreglo[i])==true)
{

nuevo[i]=arreglo[i];
}

}

 var cont=0
 //var cont2=0;

do 
{
    if(nuevo[cont]==undefined)
    {
    nuevo.splice(cont,1)
    
    //cont2++;
    }

console.log(nuevo[cont])
cont++


}
while(cont<nuevo.length)

//console.log(cont2)