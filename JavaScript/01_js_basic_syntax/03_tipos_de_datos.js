/*
      Lost tipos de datos se dividen en dos bloques: los datos primitivos y los datos compuestos:
    
        Tipos de datos primitivos: 
            En JavaScript, los tipos de datos primitivos son aquellos que representan valores simples y se almacenan directamente en la variable asignada. Estos tipos de datos son inmutables, lo que significa que una vez creados, no se pueden cambiar. 
            
            Los tipos de datos primitivos incluyen:
            
            string = '',
            number = 200,
            boolean = true, false,
            undefined = undefined,
            null = null,
            Bigin,
            Symbol

        Tipos de datos compuestos:
            En JavaScript son aquellos que pueden contener múltiples valores y se almacenan por referencia. Estos tipos de datos pueden contener otros valores, incluidos tipos primitivos y otros tipos de datos compuestos. 
            
            Los tipos de datos compuestos incluyen:

            Objetos = {}, 
            Arreglos = [], 
            Funciones = (){}, 
            Expresiones regulares /^$/, 
            Map, 
            Set, 
            Date, 
*/


// Tipos de datos primitivos
//==============================

// string
// Cadena de texto: Representa secuencias de caracteres. Texto entre comillas simples o dobles.
let myString = '';
let myString2 = 'Hello World!';
let myString3 = '100';
let myString4 = "Hello Marco";
let myString5 = `Hello Mari`;

// console.log(myString);
// console.log(myString2);
// console.log(myString3);
// console.log(myString4);
// console.log(myString5);


// number
// Número: Representa valores numéricos. Definición: Números enteros o decimales
let myNumber = 200;
let myNumber2 = 3.14;

// console.log(myNumber);
// console.log(myNumber2);


// booleanos
// Booleano: Representa valores de verdad. Definición: Puede ser verdadero (true) o falso (false).

let myBoolean = true;
let myBoolean2 = false;

// console.log(myBoolean);
// console.log(myBoolean2);


// undefined
// Representa la falta de valor asignado. Definición: Se utiliza cuando una variable no ha sido inicializada.
let myUndefined;
let myUndefined2 = undefined;

// console.log(myUndefined);
// console.log(myUndefined2);


// null
// Valor nulo: Representa la ausencia intencional de valor Definición: Representa la falta de valor asignado.
let myNullValue = null;
// console.log(myNullValue);


// Bigin,
// Symbol


// Tipos de datos compuestos:
//==============================

// Objetos, 
// Un objeto es una estructura de datos que puede contener múltiples valores, organizados como pares clave-valor. Representa colecciones de pares clave-valor.
let person = {};

let person2 = {
    nombre: 'Mario',
    edad: 30,
    soltero: false
}
// console.log(person);
// console.log(person2);


// Arreglos , 
// Un arreglo es una estructura de datos que puede contener múltiples valores, organizados en una secuencia ordenada y accesibles por índice. Representa colecciones ordenadas de valores.
let myArray = [];
let myArray2 = [1, 2, 3];
let myArray3 = ['red','green', 'blue'];
let myArray4 = [1, 'Mango', null, undefined, true];

// console.log(myArray);
// console.log(myArray2);
// console.log(myArray3);
// console.log(myArray4);



// Funciones, 
// Una función es un bloque de código reutilizable que puede ejecutar una tarea específica cuando es llamado o invocado. Es un objeto especial que puede ser invocado.
function myFunction() {
    console.log('My first function');
}
myFunction();
// console.log(myFunction());


// Expresiones regulares, 
// Una expresión regular es un objeto que describe un patrón de búsqueda en una cadena de texto. Representa patrones de búsqueda en cadenas de texto.

let myRegExp = /\d+/;
let result = myRegExp.test('123abc');
console.log(result);

// Map, 
// Set, 
// Date,