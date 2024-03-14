// Types of JavaScript Operators


// Arithmetic Operators: Realizan operaciones matemáticas
//===============================================
// + add operator 
// - substract operator  
// * multyply operator 
// / divide operator 
// % module operator  
// ++	Increment
// --	Decrement
// **	Exponentiation (ES2016)

let sumar = 3 + 3;
// console.log(sumar);

let restart = 10 - 5;
// console.log(restart);

let multyply = 5 * 10;
// console.log(multyply);

let dividir = 100 / 10;
// console.log(dividir);

let modulo = 10 % 3;
// console.log(modulo);

let numero = 5;
numero++;
// console.log(numero);

let numero2 = 3;
numero2--;
// console.log(numero2);

let potencia = 2 ** 3; // = 8
// console.log(potencia);



// Logical Operators: Se utilizan para determinar la lógica entre variables o valores.
//===============================================
// &&	logical and
// ||	logical or 
// !	logical not

// Operador lógico AND (&&): Este operador devuelve true si ambos operandos son verdaderos. Si alguno de los dos operandos es false, el resultado será false.
let resultodo = true && true ;
let resultodo2 = false && true ;
// console.log(resultodo2);


// Operador lógico OR (||): Este operador devuelve true si al menos uno de los operandos es verdadero. Si ambos operandos son false, el resultado será false.
let resultodo3 = false || true;
let resultodo4 = true || false;
let resultodo5 = false || false;
// console.log(resultodo5);


// Operador lógico NOT (!): Este operador invierte el valor de verdad del operando. Si el operando es true, devuelve false, y si es false, devuelve true.
let resultodo6 = !true;
let resultodo7 = !false;
// console.log(resultodo7);



// Assignment Operators: Asignan valores a variables
//===============================================
// Assignment Operators: Asignan valores a variables
// = asing operator
// += asing operator
// -= asing operator
// *= asing operator
// /= asing operator
// %= asing operator
// **= asing operator


// Operador de asignación (=): Asigna el valor del lado derecho a la variable del lado izquierdo.
let numeroCinco = 5;
// console.log(numeroCinco);

// Operador de asignación de suma (+=): Suma el valor del lado derecho al valor de la variable y asigna el resultado a la variable.
numeroCinco += 3;
// console.log(numeroCinco);

// Operador de asignación de resta (-=): Resta el valor del lado derecho del valor de la variable y asigna el resultado a la variable.
numeroCinco -= 3;
// console.log(numeroCinco);

// Operador de asignación de multiplicación (*=): Multiplica el valor de la variable por el valor del lado derecho y asigna el resultado a la variable.
let multiplicaPorTres = 3;
// console.log(multiplicaPorTres);
multiplicaPorTres *= 3;
// console.log(multiplicaPorTres);

// Operador de asignación de división (/=): Divide el valor de la variable por el valor del lado derecho y asigna el resultado a la variable
let valorX = 10;
// console.log(valorX);
valorX /= 2;
// console.log(valorX);

// Operador de asignación de módulo (%=): Toma el módulo de la variable con el valor del lado derecho y asigna el resultado a la variable.
let valoY = 10;
valoY %= 3;
// console.log(valoY);

// Operador de asignación de exponenciación (**=): Eleva el valor de la variable a la potencia del valor del lado derecho y asigna el resultado a la variable.
let z = 5;
z **= 2;
// console.log(z);



// Comparison Operators:  se utilizan para comparar dos valores y devolver un valor booleano (true o false) basado en si la comparación es verdadera o falsa. 
//===============================================
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to


let igualA = '5' == 5;
// console.log(igualA);

let igualA2 = '5' === 5;
// console.log(igualA2);

let notIgual = '5' != 5;
// console.log(notIgual);

let notIgual2 = '5' !== 5;
// console.log(notIgual2);


let greaterThan = 10 > 5;
// console.log(greaterThan);


let lessThan = 10 < 5;
// console.log(lessThan);


let greaterThanOrIqual = 11 >= 10;
console.log(greaterThanOrIqual);


let lessThanOrIqual = 11 <= 10;
console.log(lessThanOrIqual);
