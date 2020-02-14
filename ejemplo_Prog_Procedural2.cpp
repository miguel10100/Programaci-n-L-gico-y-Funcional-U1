// estructura de control condicional
#include<iostream>
#include<cstdlib>

using namespace std;

int main()
{
	int n;
	cout << "Introduce un numero: ";
	cin>> n;
	
	if(n >= -10 and n<=10){
		cout<< "El numero esta dentro del numero [-10, 10]" <<endl;
	}else {
			cout<< "El numero No esta dentro del numero [-10, 10]" <<endl;

	}
	return 0;
}
