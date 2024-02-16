// Comments:
// ===================================
/* This is a block Comment
    Here the commentd content
*/

// This is an inline comment


// Programming flow
// ===================================
// Normally the programming flow is executed sequentially, that is: we declare a variable or block of code and then we assign values to it and then we call or invoke it. and it will return a value or do what we specified.



// Variables:
// ===================================
    // keywords
    // var , let

    // Variable declarations
    var myVar;
    let myVar1;


    // Values assignment
    myVar = 'John';
    myVar1 = 'Doe';


    // Inline declaration
    let myVar2, myVar3, myVar4;

    myVar2 = 'One'
    myVar3 = 'Tow'
    myVar4 = 'Three'



//  var vs let hoisting
// ===================================
// In this case, the variable myVar5 is declared with var, which means that it is hoisted to the beginning of the function scope or global scope, but its assignment (i.e., the value 'Mario') remains in its original place .
console.log(myVar5);
var myVar5 = 'Mario';
console.log(myVar5);

console.log(myVar6);
let myVar6 = 'Maria';
console.log(myVar6);


var music = 'Rock';
console.log('Start variable value:', music);

{
    var music = 'Pop';
    console.log('Into the block:', music);
}

console.log('Out the block:', music);



let music = 'Rock';
console.log('Start variable value:', music);

{
    let music = 'Pop';
    console.log('Into the block:', music);
}

console.log('Out the block:', music);