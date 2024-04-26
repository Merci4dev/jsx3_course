// Variables:

// Una variable es un elemento fundamental en la programación que se utiliza para almacenar datos que pueden cambiar durante la ejecución de un programa. En esencia, una variable actúa como un contenedor para valores en memoria que pueden ser leídos y modificados por el programa.

//  var let 

/*
    let myName;
    let myAge;
    let myCity;

    myName =  'Mario';
    myAge = 30;
    myCity = 'Madrid';

    console.log(myName);
    console.log(myAge);
    console.log(myCity);
*/


// Inline variable declaration
/*
    let myName, myAge, myCity;

    myName = 'Mario';
    myAge = 30;
    myCity = 'Madrid';

    console.log(myName, myAge, myCity);
*/


// Reasignacion de valores en variables 
/*
    let myName = 'Mario';
    let myEmptyVar = '';
    let myNumber = 20;

    // console.log(myName); 
    console.log(myEmptyVar);
    console.log(myNumber);

    myName = 'Julio';
    myNumber = 100;
    console.log(myName);
    console.log(myNumber);
*/


//  var vs let hoisting
/*
    console.log(myName);
    // var myName = 'Mario';
    // var myName = 'Mario';
    console.log(myName);
*/


// let myName = 'Mario';
// console.log(myName);


var music = 'Rock';
console.log('Var Initial value:', music);

    {
        var music = 'Pop';
        console.log('Var Into the Block:', music);
    }
console.log('Var Out the Block:', music);

console.log('*'.repeat(25));
console.log('='.repeat(25));

 music = 'Rock';
console.log('Var Initial value:', music);

    {
        let music = 'Pop';
        console.log('Var Into the Block:', music);
    }
console.log('Var Out the Block:', music);