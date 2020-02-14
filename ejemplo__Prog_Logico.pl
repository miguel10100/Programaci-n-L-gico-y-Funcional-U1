%hechos  y objetos.
masculino(fernando).
masculino(jesus).
masculino(andres).
masculino(miguel).

padre(fernando, jesus).
padre(jesus, andres).
padre(andres, miguel).


%Reglas,variables.
abuelo(X,Y):-
padre(X,A),
padre(A,Y).



