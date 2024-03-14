/*Data Type
        Tipos de datos primitivos: 
            En JavaScript, los tipos de datos primitivos son aquellos que representan valores simples y se almacenan directamente en la variable asignada. Estos tipos de datos son inmutables, lo que significa que una vez creados, no se pueden cambiar. 
            
            Los tipos de datos primitivos incluyen:
            
            string,
            number,
            boolean,
            undefined,
            null,
            Bigin,
            Symbol

    Tipos de datos compuestos:
        En JavaScript son aquellos que pueden contener múltiples valores y se almacenan por referencia. Estos tipos de datos pueden contener otros valores, incluidos tipos primitivos y otros tipos de datos compuestos. 
        
        Los tipos de datos compuestos incluyen:

        Objetos, 
        Arreglos , 
        Funciones, 
        Expresiones regulares, 
        Map, 
        Set, 
        Date, 
*/


// Tipos de datos primitivos
//==============================
// string
// Cadena de texto: Representa secuencias de caracteres. Texto entre comillas simples o dobles.
let myString = 'Hello World';
let myString2 = "Hello World";
let myString3 = `Hello World`;

// number
// Número: Representa valores numéricos. Definición: Números enteros o decimales.
let myNumber = 100;
let precio = 10.99;

// booleanos
// Booleano: Representa valores de verdad. Definición: Puede ser verdadero (true) o falso (false).
let myBoolena = true
let esMayorDeEdad = true;
let tienePermiso = false;

// undefined
// Representa la falta de valor asignado. Definición: Se utiliza cuando una variable no ha sido inicializada.
let myUndefined = undefined
let variableNoDefinida;
let otraVariable;


// null
// Valor nulo: Representa la ausencia intencional de valor Definición: Representa la falta de valor asignado.
let resultado = null;
let valorNoAsignado = null;

// Symbol


// Tipos de datos compuestos:
//==============================
// Objetos, 
// Un objeto es una estructura de datos que puede contener múltiples valores, organizados como pares clave-valor. Representa colecciones de pares clave-valor.
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022
};

// Arreglos , 
// Un arreglo es una estructura de datos que puede contener múltiples valores, organizados en una secuencia ordenada y accesibles por índice. Representa colecciones ordenadas de valores.
let numeros = [1, 2, 3, 4, 5];
const colores = ["rojo", "verde", "azul"];

// Funciones, 
// Una función es un bloque de código reutilizable que puede ejecutar una tarea específica cuando es llamado o invocado. Es un objeto especial que puede ser invocado.
    function myFunction () {
        let myArray = 'string into a function'
        return myArray;
    }

// Expresiones regulares, 
// Una expresión regular es un objeto que describe un patrón de búsqueda en una cadena de texto. Representa patrones de búsqueda en cadenas de texto.
let expresionRegular = /\d+/;
let resultado1 = expresionRegular.test("123abc"); // Output: true


// Map, 
// Set, 
// Date,