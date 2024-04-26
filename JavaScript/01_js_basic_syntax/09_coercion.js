/*
    Coerción Explícita: Esto ocurre cuando se utiliza una función o método específico para convertir explícitamente de un tipo de dato a otro. Por ejemplo, utilizando Number(), String(), o Boolean() para convertir valores específicamente a esos tipos.
*/

// let numero = 20;
// let numero2 = 2;
// let strNumber = ' Number ';

// console.log(numero);
// console.log(numero2);

// let resultado4 =  strNumber + numero + numero2;
// console.log(resultado4);

/*
    JavaScript es un lenguaje de tipado dinámico, lo que significa que los tipos de datos de las variables pueden cambiar en tiempo de ejecución. Cuando se realiza una operación que involucra un string y un número, el número es convertido automáticamente a string para permitir la operación de concatenación. Este comportamiento es consistente a través de operaciones que mezclan strings y números en JavaScript.

    Primero, number + numberOne se evalúa. Dado que number es un string, JavaScript realiza una coerción de tipo sobre numberOne (que es un número), convirtiéndolo en un string y luego concatenando los dos. Esto resulta en el string " Numero 20".
    Luego, " Numero 20" + numbertwo se evalúa. Nuevamente, debido a que el primer operando es un string, numbertwo también es convertido a un string y concatenado, resultando en " Numero 202".
*/

let numero = 20;
let numero2 = 2;
let strNumber = ' Number ';

// Nota: el orden de dende apararecen las variables a la hora de concatenar es importantes;
// La operaciónes se evalúan de izquierda a derecha.


// let resultado5 = strNumber +  numero + numero2 ;
// let resultado5 =  numero + numero2 + strNumber;
let resultado5 = strNumber + (numero + numero2 );
// let resultado5 = (numero + numero2 ) + strNumber ;
console.log(resultado5);