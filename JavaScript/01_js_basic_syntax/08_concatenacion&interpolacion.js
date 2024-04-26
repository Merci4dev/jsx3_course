// Concatenacion & Intepolacion
// Concatenacion de variables
let nombre = 'Mario';
let apellido = 'Lopez';

let resultado = nombre +' '+ apellido;

// console.log(nombre, apellido);
// console.log(apellido);
// console.log(resultado);

// Concatenacion de variables y string
let resultado2 = 'Hola ' + nombre +' '+ apellido;
// console.log(resultado2);

// Concatenacion de strings
// let resultado3 = 'Hello' + ' World!';
let resultado3 = 'Hello World!';
// console.log(resultado3);


// Concatenacion de string y numeros
let numero = 20;
let numero2 = 2;
let strNumber = ' Number ';

let resultado4 =  strNumber + numero + numero2;
console.log(resultado4);



// Interpolacion: insertar de forma dinamica el valor de una variable dentro de un string 

let saludo = 'Hola';
let subject = 'Mundo';

let resultado5 = `${saludo} ${subject}, hoy es un lindo dia.`
// console.log(resultado5);