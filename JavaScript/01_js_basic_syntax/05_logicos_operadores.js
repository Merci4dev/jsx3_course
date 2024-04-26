// Types of JavaScript Operators

// En JavaScript, los operadores son símbolos especiales o palabras clave que se utilizan para realizar operaciones sobre uno o más operandos y devolver un resultado. Estos operadores permiten realizar desde operaciones matemáticas básicas hasta manipulación compleja de objetos y valores lógicos. Los operadores se clasifican en diferentes tipos 

// Operadores Simples
// Operadores Compuestos

/*
    Arithmetic Operators
    Logical Operators
    Assignment Operators
    Comparison Operators
*/


// Operadores Simples

// Logical Operators: Se utilizan para determinar la lógica entre variables o valores. pero no son compuestos
//===============================================
// &&	logical and
// ||	logical or 
// !	logical not


// Operador lógico AND (&&): Este operador devuelve true si ambos operandos son verdaderos. Si alguno de los dos operandos es false, el resultado será false.
let resultado1 = true && true;
// console.log(resultado1);

// let resultado2 = false && true;
let resultado2 = true && false;
// console.log(resultado2);

let funcional = true;
// let enVenta = true;
let enVenta = false;

let disponibilida = funcional && enVenta;
// console.log(disponibilida);


// Operador lógico OR (||): Este operador devuelve true si al menos uno de los operandos es verdadero. Si ambos operandos son false, el resultado será false.
let resultado3 =  true || false;
// console.log(resultado3);
let resultado4 =  false || true;
// console.log(resultado4);
let resultado5 =  false || false;
// console.log(resultado5);

let funcional2 = false;
let enVenta2 = true;

let disponibilida2 = funcional2 || enVenta2;
// console.log(disponibilida2);

// Operador lógico NOT (!): Este operador invierte el valor de verdad del operando. Si el operando es true, devuelve false, y si es false, devuelve true.

let resultado6 = !false;
let resultado7 = !true;
console.log(resultado6);
console.log(resultado7);


