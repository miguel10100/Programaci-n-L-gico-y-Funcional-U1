#include <stdio.h>
#include <conio.h>

main()
{
      int val1,val2, opc, resultado;
      while(opc!=5)
      {
       printf("****************CALCULADORA BASICA*******************\n");
       printf("1.- Suma\n");
       printf("2.- Resta\n");
       printf("3.- Multiplicacion\n");
       printf("4.- Division\n");
       printf("5.- Salir\n");
        printf("*****************************************************\n");
       printf("Releccione Una Opcion : ");
       scanf("%d",&opc);
       
       if(opc!=5)
       {
        printf("Ingrese El Primer Numero: ");
        scanf("%d",&val1);
        printf("Ingrese El Segundo Numero: ");
        scanf("%d",&val2);
       }
       
       switch(opc)
       {
        case 1:
             resultado= val1+val2;
             printf("El Resultado De La Suma Es %d \n" , resultado );
             break;
        case 2:
              resultado= val1-val2;
             printf("El Resultado De La Resta Es %d \n" , resultado );
             break;
        case 3:
              resultado= val1*val2;
             printf("El Resultado De La Multiplicacion Es %d \n" , resultado );
             break;
        case 4:
              resultado= val1/val2;
             printf("El Resultado De La Division Es %d \n" , resultado );
             break;
        case 5:
             break;
       }
        
      
      }
}
